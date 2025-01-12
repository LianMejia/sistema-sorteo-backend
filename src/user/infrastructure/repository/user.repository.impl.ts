import { User, UserRepository } from '@/user/domain';
import pool from '@/shared/infrastructure/database/config';
import bcryptjs from 'bcryptjs';

export class UserRepositoryImpl implements UserRepository {
  async getAll(): Promise<User[]> {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    return result.rows;
  }

  async getOne(id: string): Promise<User> {
    const query = 'SELECT * FROM users WHERE user_id = $1';
    const value = [id];

    const result = await pool.query<User>(query, value);

    return result.rows[0];
  }

  async create(user: User): Promise<User> {
    const salt = await bcryptjs.genSaltSync();
    const encryptedPassword = await bcryptjs.hashSync(user.password, salt);

    const query =
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *';

    const values = [user.email, encryptedPassword];

    const result = await pool.query<User>(query, values);

    const newUser = result.rows[0];

    return newUser;
  }

  async update(id: string, partialUser: Partial<User>): Promise<User> {
    // Construimos dinámicamente la consulta para los campos a actualizar
    const fields: string[] = [];
    const values: (string | boolean | null)[] = [];

    // Iteramos sobre las propiedades del objeto parcial
    if (partialUser.password !== undefined) {
      const salt = await bcryptjs.genSaltSync();
      const encryptedPassword = await bcryptjs.hashSync(
        partialUser.password,
        salt
      );

      fields.push('password = $' + (fields.length + 1));
      values.push(encryptedPassword);
    }

    // Si no hay campos para actualizar, retornamos el usuario sin modificar
    if (fields.length === 0) {
      const user = await this.getOne(id);
      return user;
    }

    // Agregamos el ID al final de los valores
    values.push(id);

    // Construimos la consulta dinámica
    const query = `UPDATE users SET ${fields.join(', ')} WHERE user_id = $${
      fields.length + 1
    } RETURNING *;`;

    const result = await pool.query<User>(query, values);
    const updateUser = result.rows[0];
    return updateUser;
  }
}

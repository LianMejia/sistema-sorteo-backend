import { City, CityRepository } from '@/city/Domain';
import pool from '@/shared/infrastructure/database/config';

export class CityRepositoryImpl implements CityRepository {
  async getAll(): Promise<City[]> {
    const query = 'SELECT * FROM cities';

    const result = await pool.query<City>(query);

    return result.rows;
  }

  async getOne(id: string): Promise<City> {
    const query = 'SELECT * FROM cities WHERE city_id = $1';
    const value = [id];

    const result = await pool.query<City>(query, value);

    return result.rows[0];
  }

  async create(city: City): Promise<City> {
    const query =
      'INSERT INTO cities (country_id, name, is_active) VALUES ($1, $2, $3) RETURNING *';

    const values = [city.country_id, city.name, city.is_active];

    const result = await pool.query<City>(query, values);

    const newCity = result.rows[0];

    return newCity;
  }

  async update(id: string, partialCity: Partial<City>): Promise<City> {
    // Construimos dinámicamente la consulta para los campos a actualizar
    const fields: string[] = [];
    const values: (string | boolean | null)[] = [];

    // Iteramos sobre las propiedades del objeto parcial
    if (partialCity.name !== undefined) {
      fields.push('name = $' + (fields.length + 1));
      values.push(partialCity.name);
    }

    if (partialCity.is_active !== undefined) {
      fields.push('is_active = $' + (fields.length + 1));
      values.push(partialCity.is_active);
    }

    // Si no hay campos para actualizar, retornamos el país sin modificar
    if (fields.length === 0) {
      const country = await this.getOne(id);
      return country;
    }

    // Agregamos el ID al final de los valores
    values.push(id);

    // Construimos la consulta dinámica
    const query = `UPDATE cities SET ${fields.join(', ')} WHERE city_id = $${
      fields.length + 1
    } RETURNING *;`;

    const result = await pool.query<City>(query, values);
    const updateCountry = result.rows[0];
    return updateCountry;
  }

  async delete(id: string): Promise<City> {
    const query = 'DELETE FROM cities WHERE city_id = $1 RETURNING *';

    const value = [id];

    const result = await pool.query<City>(query, value);

    const deletedCity = result.rows[0];

    return deletedCity;
  }
}

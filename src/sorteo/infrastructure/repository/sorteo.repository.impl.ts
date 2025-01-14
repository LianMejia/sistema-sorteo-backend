import pool from '@/shared/infrastructure/database/config';
import { Sorteo, SorteoRepository } from '@/sorteo/domain';

export class SorteoRepositoryImpl implements SorteoRepository {
  async getAll(): Promise<Sorteo[]> {
    const query = 'SELECT * FROM sorteos';

    const result = await pool.query<Sorteo>(query);

    return result.rows;
  }

  async getOne(id: string): Promise<Sorteo> {
    const query = 'SELECT * FROM sorteos WHERE sorteo_id = $1';
    const value = [id];

    const result = await pool.query<Sorteo>(query, value);

    return result.rows[0];
  }

  async create(sorteo: Sorteo): Promise<Sorteo> {
    const query =
      'INSERT INTO sorteos (category_id, name, description, is_active, image, start_date, end_date, total_tickets) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';

    const values = [
      sorteo.category_id,
      sorteo.name,
      sorteo.description,
      sorteo.is_active,
      sorteo.image,
      sorteo.start_date,
      sorteo.end_date,
      sorteo.total_tickets,
    ];

    const result = await pool.query<Sorteo>(query, values);

    const newSorteo = result.rows[0];

    return newSorteo;
  }

  async update(id: string, partialSorteo: Partial<Sorteo>): Promise<Sorteo> {
    // Construimos dinámicamente la consulta para los campos a actualizar
    const fields: string[] = [];
    const values: (string | string[] | number | boolean | null)[] = [];

    // Iteramos sobre las propiedades del objeto parcial
    if (partialSorteo.category_id !== undefined) {
      fields.push('category_id = $' + (fields.length + 1));
      values.push(partialSorteo.category_id);
    }

    if (partialSorteo.name !== undefined) {
      fields.push('name = $' + (fields.length + 1));
      values.push(partialSorteo.name);
    }

    if (partialSorteo.description !== undefined) {
      fields.push('description = $' + (fields.length + 1));
      values.push(partialSorteo.description);
    }

    if (partialSorteo.is_active !== undefined) {
      fields.push('is_active = $' + (fields.length + 1));
      values.push(partialSorteo.is_active);
    }

    if (partialSorteo.image !== undefined) {
      fields.push('image = $' + (fields.length + 1));
      values.push(partialSorteo.image);
    }

    if (partialSorteo.start_date !== undefined) {
      fields.push('start_date = $' + (fields.length + 1));
      values.push(partialSorteo.start_date);
    }

    if (partialSorteo.end_date !== undefined) {
      fields.push('end_date = $' + (fields.length + 1));
      values.push(partialSorteo.end_date);
    }

    if (partialSorteo.total_tickets !== undefined) {
      fields.push('total_tickets = $' + (fields.length + 1));
      values.push(partialSorteo.total_tickets);
    }

    // Si no hay campos para actualizar, retornamos el sorteo sin modificar
    if (fields.length === 0) {
      const sorteo = await this.getOne(id);
      return sorteo;
    }

    // Agregamos el ID al final de los valores
    values.push(id);

    // Construimos la consulta dinámica
    const query = `UPDATE sorteos SET ${fields.join(', ')} WHERE sorteo_id = $${
      fields.length + 1
    } RETURNING *;`;

    const result = await pool.query<Sorteo>(query, values);
    const updateSorteo = result.rows[0];
    return updateSorteo;
  }

  async delete(id: string): Promise<Sorteo> {
    const query = 'DELETE FROM sorteos WHERE sorteo_id = $1 RETURNING *';

    const value = [id];

    const result = await pool.query<Sorteo>(query, value);

    const deletedSorteo = result.rows[0];

    return deletedSorteo;
  }
}

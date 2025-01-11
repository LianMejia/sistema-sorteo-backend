import { Country, CountryRepository } from '@/country/domain';
import pool from '@/shared/infrastructure/database/config';

export class CountryRepositoryImpl implements CountryRepository {
  async getAll(): Promise<Country[]> {
    const query = 'SELECT * FROM countries';

    const result = await pool.query<Country>(query);

    return result.rows;
  }

  async getOne(id: string): Promise<Country> {
    const query = 'SELECT * FROM countries WHERE country_id = $1';
    const value = [id];

    const result = await pool.query(query, value);

    return result.rows[0];
  }

  async create(country: Country): Promise<Country> {
    const query =
      'INSERT INTO countries (name, is_active, country_code, phone_code) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [
      country.name,
      country.is_active,
      country.country_code,
      country.phone_code,
    ];
    const result = await pool.query(query, values);
    const newCountry = result.rows[0];
    return newCountry;
  }

  async update(id: string, partialCountry: Partial<Country>): Promise<Country> {
    // Construimos dinámicamente la consulta para los campos a actualizar
    const fields: string[] = [];
    const values: (string | boolean | null)[] = [];

    // Iteramos sobre las propiedades del objeto parcial
    if (partialCountry.name !== undefined) {
      fields.push('name = $' + (fields.length + 1));
      values.push(partialCountry.name);
    }

    if (partialCountry.is_active !== undefined) {
      fields.push('is_active = $' + (fields.length + 1));
      values.push(partialCountry.is_active);
    }

    if (partialCountry.country_code !== undefined) {
      fields.push('country_code = $' + (fields.length + 1));
      values.push(partialCountry.country_code);
    }

    if (partialCountry.phone_code !== undefined) {
      fields.push('phone_code = $' + (fields.length + 1));
      values.push(partialCountry.phone_code);
    }

    // Si no hay campos para actualizar, retornamos el país sin modificar
    if (fields.length === 0) {
      const country = await this.getOne(id);
      return country;
    }

    // Agregamos el ID al final de los valores
    values.push(id);

    // Construimos la consulta dinámica
    const query = `UPDATE countries SET ${fields.join(
      ', '
    )} WHERE country_id = $${fields.length + 1} RETURNING *;`;

    const result = await pool.query<Country>(query, values);
    const updateCountry = result.rows[0];
    return updateCountry;
  }

  async delete(id: string): Promise<Country> {
    const query = 'DELETE FROM countries WHERE country_id = $1 RETURNING *';
    const value = [id];

    const result = await pool.query<Country>(query, value);
    const deletedCountry = result.rows[0];

    console.log('deletedCountry', deletedCountry);

    return deletedCountry;
  }
}

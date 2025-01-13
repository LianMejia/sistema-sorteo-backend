import { Category, CategoryRepository } from '@/category/domain';
import pool from '@/shared/infrastructure/database/config';

export class CategoryRepositoryImpl implements CategoryRepository {
  async getAll(): Promise<Category[]> {
    const query = 'SELECT * FROM categories';

    const result = await pool.query<Category>(query);

    return result.rows;
  }

  async getOne(id: string): Promise<Category> {
    const query = 'SELECT * FROM categories WHERE category_id = $1';
    const value = [id];

    const result = await pool.query<Category>(query, value);

    return result.rows[0];
  }

  async create(category: Category): Promise<Category> {
    const query =
      'INSERT INTO categories (name, description, is_active) VALUES ($1, $2, $3) RETURNING *';

    const values = [category.name, category.description, category.is_active];

    const result = await pool.query<Category>(query, values);

    const newCategory = result.rows[0];

    return newCategory;
  }

  async update(
    id: string,
    partialCategory: Partial<Category>
  ): Promise<Category> {
    // Construimos dinámicamente la consulta para los campos a actualizar
    const fields: string[] = [];
    const values: (string | boolean | null)[] = [];

    // Iteramos sobre las propiedades del objeto parcial
    if (partialCategory.name !== undefined) {
      fields.push('name = $' + (fields.length + 1));
      values.push(partialCategory.name);
    }

    if (partialCategory.description !== undefined) {
      fields.push('description = $' + (fields.length + 1));
      values.push(partialCategory.description);
    }

    if (partialCategory.is_active !== undefined) {
      fields.push('is_active = $' + (fields.length + 1));
      values.push(partialCategory.is_active);
    }

    // Si no hay campos para actualizar, retornamos la ciudad sin modificar
    if (fields.length === 0) {
      const category = await this.getOne(id);
      return category;
    }

    // Agregamos el ID al final de los valores
    values.push(id);

    // Construimos la consulta dinámica
    const query = `UPDATE categories SET ${fields.join(
      ', '
    )} WHERE category_id = $${fields.length + 1} RETURNING *;`;

    const result = await pool.query<Category>(query, values);
    const updateCategory = result.rows[0];
    return updateCategory;
  }

  async delete(id: string): Promise<Category> {
    const query = 'DELETE FROM categories WHERE category_id = $1 RETURNING *';

    const value = [id];

    const result = await pool.query<Category>(query, value);

    const deletedCategory = result.rows[0];

    return deletedCategory;
  }
}

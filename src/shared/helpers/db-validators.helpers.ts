import pool from '@/shared/infrastructure/database/config';

export const queryValueExists = (path: string, table: string) => {
  return async (value = '') => {
    const query = `SELECT * FROM ${table} WHERE ${path} = $1`;
    const { rows } = await pool.query(query, [value]);
    if (rows.length > 0) {
      throw new Error(`El ${path}: ${value} ya está registrado`);
    }
  };
};

export const queryIdNotExist = (path: string, table: string) => {
  return async (value = '') => {
    const query = `SELECT * FROM ${table} WHERE ${path} = $1`;
    const { rowCount } = await pool.query(query, [value]);
    if (rowCount === 0) {
      throw new Error(`El ${path}: ${value} no existe en la base de datos`);
    }
  };
};

import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
});

pool.connect((err: Error | undefined) => {
  if (err) {
    console.error('Error to connect database', err);
  } else {
    console.log('Postgres connection successfuly');
  }
});

export default pool;

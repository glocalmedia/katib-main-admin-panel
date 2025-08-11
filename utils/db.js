import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10, // adjust pool size as needed
  queueLimit: 0
});

export default async function executeQuery({ query, values }) {
  try {
    const [rows] = await pool.execute(query, values);
    return rows;
  } catch (error) {
    return { error };
  }
}



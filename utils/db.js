import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "srv1022.hstgr.io",
  port: "u753608608_katibnew",
  database: "u753608608_katibnew",
  user: "u753608608_katibnew",
  password: "Katib@mncmg123!@#",
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



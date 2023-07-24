import pgk from "pg";
const { Pool } = pgk;

const pool = new Pool({
  host: "dpg-civ3i4tgkuvoigbhpi30-a",
  port: "5432",
  Database: "products_swxl",
  user: "products_swxl_user",
  password: "mriMiLigNpLtMirxvXD8352HCSNsY7dX",
});

export const createTable = async () => {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS products(id SERIAL PRIMARY KEY,title TEXT, price INT)"
  );
};

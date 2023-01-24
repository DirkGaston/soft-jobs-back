const { Pool } = require("pg");
const { credentials } = require("../configs/db.configs");

const pool = new Pool(credentials);

const query = async (text, params) => {
  console.log("hello")
  try {
    console.log("hello")
    const client = await pool.connect();
    const result = await client.query(text, params);
    client.release();
    return result;
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = { query };
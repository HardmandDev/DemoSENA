const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres.wlgxkqkqzdstaomltuge',
  host: 'aws-0-us-east-1.pooler.supabase.com',
  database: 'postgres',
  password: 'DemoSENA2024.',
  port: 6543,
});

module.exports = pool;
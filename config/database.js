module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '127.0.0.1'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'postgres'),
      user: env('PGUSER', 'strapi'),
      password: env('PGPASSWORD', 'strapi'),
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});

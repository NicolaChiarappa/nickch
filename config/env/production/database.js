module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: 5432,
      database: env("DATABASE_NAME"),
      user: "postgres",
      password: env("DATABASE_PASSWORD"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
      schema: env("DATABASE_SCHEMA", "public"),
    },
    debug: false,
  },
});

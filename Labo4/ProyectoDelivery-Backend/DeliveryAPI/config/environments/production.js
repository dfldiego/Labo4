module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "school_prod",
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
};

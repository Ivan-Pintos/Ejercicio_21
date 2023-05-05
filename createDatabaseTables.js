/**
 * Este archivo se encarga de crear todas las tablas del sistema.
 *
 * En caso de que las tablas ya existían, se eliminan y se crean
 * nuevamente.
 *
 * Para ejecutar este archivo se debe correr el comando:
 *
 * 👉 node createDatabaseTables.js
 *
 * Como alternativa, en el artchivo package.json se creó un comando "alias"
 * para que la ejecución sea un poco más corta:
 *
 * 👉 npm run tables
 *
 */

require("dotenv").config();
const { sequelize } = require("./models");

async function createDatabaseTables() {
  await sequelize.sync({ alter: true });
  console.log("[Database] ¡Las tablas fueron creadas!");
}

createDatabaseTables();

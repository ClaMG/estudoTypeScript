import 'dotenv/config';
import { Sequelize, Dialect } from 'sequelize';

//Pegamos o .env e forçamos o tipo Dialect
const dbDialect = (process.env.DB_DIALECT) as Dialect;

//Instanciamos a conexão
const dbConfig = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), 
    dialect: dbDialect, 
    logging: false,
    define: {
      timestamps: false,
      underscored: true,
    }
  }
);

export default dbConfig;
import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Emprendedor = db.define("emprendedores", {
  emprendedor_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dni: {
    type: DataTypes.STRING,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  telefono: {
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false,
  tableName: "emprendedores"
});

export default Emprendedor;

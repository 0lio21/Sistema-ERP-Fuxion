import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Emprendedor from "./emprendedorModel.js";


const Client = db.define('clients', {
  client_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  dni: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  client_name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  contact_email: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  contact_phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  billing_address: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  emprendedor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'emprendedores',
      key: 'emprendedor_id'
    }},
  tableName: 'clients',
  timestamps: false
});

Client.belongsTo(Emprendedor, {
    foreignKey: "emprendedor_id"
  });

export default Client;

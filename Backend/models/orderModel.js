import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Client from './clientsModel.js'; 

const Order = db.define('orders', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Client,
      key: 'client_id'
    }
  },
  order_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  order_number: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  order_status: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'orders',
  timestamps: false
});

// relacion 1:N (un cliente puede tener muchas ordenes)
Client.hasMany(Order, { foreignKey: 'client_id' });
Order.belongsTo(Client, { foreignKey: 'client_id' });

export default Order;

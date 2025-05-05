import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Order from './orderItemModel.js';
import Client from './ClientModel.js';

const Invoice = db.define('invoices', {
  invoice_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: 'order_id'
    }
  },
  invoice_number: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  invoice_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  total_amount_due: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  amount_paid: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  payment_status: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Client,
      key: 'client_id'
    }
  }
}, {
  tableName: 'invoices',
  timestamps: false
});

// relaciones
Order.hasOne(Invoice, { foreignKey: 'order_id' });
Invoice.belongsTo(Order, { foreignKey: 'order_id' });

Client.hasMany(Invoice, { foreignKey: 'client_id' });
Invoice.belongsTo(Client, { foreignKey: 'client_id' });

export default Invoice;

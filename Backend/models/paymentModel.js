import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Invoice from './invoiceModel.js';

const Payment = db.define('payments', {
  payment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  invoice_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Invoice,
      key: 'invoice_id'
    }
  },
  payment_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  payment_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  payment_method: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'payments',
  timestamps: false
});

//  una factura puede tener varios pagos
Invoice.hasMany(Payment, { foreignKey: 'invoice_id' });
Payment.belongsTo(Invoice, { foreignKey: 'invoice_id' });

export default Payment;

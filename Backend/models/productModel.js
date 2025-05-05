import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Product = db.define('products', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  sku: {
    type: DataTypes.STRING(50),
    allowNull: true
  },    
  category: {
  type: DataTypes.STRING,
  allowNull: true
},
  selling_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'products',
  timestamps: false
});

export default Product;
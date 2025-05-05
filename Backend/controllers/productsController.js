import Product from '../models/productModel.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos.' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado.' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el producto.' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto.' });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado.' });

    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto.' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado.' });

    await product.destroy();
    res.json({ message: 'Producto eliminado.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto.' });
  }
};

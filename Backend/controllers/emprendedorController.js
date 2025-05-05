import Emprendedor from '../models/emprendedorModel.js';

export const getAllEmprendedores = async (req, res) => {
  try {
    const emprendedores = await Emprendedor.findAll();
    res.json(emprendedores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener emprendedores.' });
  }
};

export const createEmprendedor = async (req, res) => {
  try {
    const nuevo = await Emprendedor.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el emprendedor.' });
  }
};

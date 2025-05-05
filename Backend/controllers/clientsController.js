import Client from '../models/clientsModel.js';

export const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los clientes.' });
  }
};

export const getClientById = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el cliente.' });
  }
};

export const createClient = async (req, res) => {
  try {
    const newClient = await Client.create(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el cliente.' });
  }
};

export const updateClient = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (client) {
      await client.update(req.body);
      res.json(client);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el cliente.' });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (client) {
      await client.destroy();
      res.json({ message: 'Cliente eliminado.' });
    } else {
      res.status(404).json({ error: 'Cliente no encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el cliente.' });
  }
};

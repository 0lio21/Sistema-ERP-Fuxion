import express from 'express';
import db from './config/db.js';
import clientsRoutes from './routes/clientsRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import emprendedoresRoutes from './routes/emprendedoresRoutes.js'; 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
    db.authenticate();
    console.log('database connected successfully');
} catch (error) {
    console.error('unable to connect to the database:', error);
}
app.use('/api/clients', clientsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/emprendedores', emprendedoresRoutes);



app.get('/', (req, res) => {
    res.send('Funciona');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
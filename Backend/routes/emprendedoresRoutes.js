import { Router } from 'express';
import {getAllEmprendedores, createEmprendedor } from '../controllers/emprendedorController.js';

const router = Router();

router.get('/', getAllEmprendedores);
router.post('/', createEmprendedor);

export default router;

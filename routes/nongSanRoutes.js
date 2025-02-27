
import express from 'express';
import { getAllNongSan } from '../controllers/nongSanController.js';

const router = express.Router();

router.get('/', getAllNongSan);

export default router;
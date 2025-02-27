
import express from 'express';
import { getAllLoaiNongSan } from '../controllers/loaiNongSanController.js';

const router = express.Router();

router.get('/', getAllLoaiNongSan);

export default router;
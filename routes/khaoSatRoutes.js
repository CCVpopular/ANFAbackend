
import express from 'express';
import KhaoSat from '../models/khaoSatModel.js';

const router = express.Router();

// Get all surveys
router.get('/', async (req, res) => {
    try {
        const khaoSats = await KhaoSat.find();
        res.json(khaoSats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new survey
router.post('/', async (req, res) => {
    const khaoSat = new KhaoSat({
        tieuDe: req.body.tieuDe,
        linkForm: req.body.linkForm
    });

    try {
        const newKhaoSat = await khaoSat.save();
        res.status(201).json(newKhaoSat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
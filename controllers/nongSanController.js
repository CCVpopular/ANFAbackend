import { NongSan } from '../models/NongSan.js';

export const getAllNongSan = async (req, res) => {
  try {
    const nongsan = await NongSan.find().populate('loaiNongSan');
    res.json(nongsan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
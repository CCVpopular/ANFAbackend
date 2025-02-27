import { LoaiNongSan } from '../models/LoaiNongSan.js';

export const getAllLoaiNongSan = async (req, res) => {
  try {
    const loainongsan = await LoaiNongSan.find();
    res.json(loainongsan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
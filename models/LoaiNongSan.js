
import mongoose from 'mongoose';

const loaiNongSanSchema = new mongoose.Schema({
  tenLoai: { type: String, required: true },
  moTa: String,
  createdAt: { type: Date, default: Date.now }
});

export const LoaiNongSan = mongoose.model('LoaiNongSan', loaiNongSanSchema);

import mongoose from 'mongoose';

const nongSanSchema = new mongoose.Schema({
  ten: { type: String, required: true },
  loaiNongSan: { type: mongoose.Schema.Types.ObjectId, ref: 'LoaiNongSan' },
  hinhAnh: String,
  createdAt: { type: Date, default: Date.now }
});

export const NongSan = mongoose.model('NongSan', nongSanSchema);

import mongoose from 'mongoose';

const khaoSatSchema = new mongoose.Schema({
    tieuDe: {
        type: String,
        required: true
    },
    linkForm: {
        type: String,
        required: true
    },
    ngayTao: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('KhaoSat', khaoSatSchema);
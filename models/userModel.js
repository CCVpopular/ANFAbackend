import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  idByOA: {
    type: String,
    unique: true,
    sparse: true
  },
  followedOA: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  avatar: String,
  phoneNumber: {
    type: String,
    unique: true
  },
  isSensitive: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }
});

export default mongoose.model('User', userSchema);
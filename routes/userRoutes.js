import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/check/:id', async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.json({ 
      exists: !!user,
      role: user ? user.role : null 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;

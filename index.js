import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import nongSanRoutes from './routes/nongSanRoutes.js';
import loaiNongSanRoutes from './routes/loaiNongSanRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Add CORS middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use('/nongsan', nongSanRoutes);
app.use('/loainongsan', loaiNongSanRoutes);
app.use('/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });
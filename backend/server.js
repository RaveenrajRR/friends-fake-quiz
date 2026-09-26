import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import quizRoutes from './routes/quizRoutes.js';
import imageRoutes from './routes/imageRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'Friends Are Fake API' }));
app.use('/api/quizzes', quizRoutes);
app.use('/api/images', imageRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/friends_fake_quiz')
  .then(() => app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`)))
  .catch(err => { console.error('MongoDB connection failed:', err.message); process.exit(1); });

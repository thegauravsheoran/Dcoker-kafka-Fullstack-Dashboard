import express from 'express';
import { getLiveData, getHistoryData } from '../store';

const router = express.Router();

router.get('/live', (req, res) => {
  res.json(getLiveData());
});

router.get('/history', (req, res) => {
  res.json(getHistoryData());
});

export default router;

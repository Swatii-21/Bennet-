import express from 'express';
import { protect } from '../server/middleware/auth.js';
const router = express.Router();

router.get('/stats', protect, async (req, res) => {
  try {
    // Example protected data
    const dashboardData = {
      visits: 1500,
      sales: 234,
      users: 65
    };
    res.json(dashboardData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
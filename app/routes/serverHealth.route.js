import { Router } from 'express';

const router = Router();

router.get('/server-health', (req, res) =>
  res.json({
    status: 200,
    message: 'Server is active and running'
  })
);

export default router;

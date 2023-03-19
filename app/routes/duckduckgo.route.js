import { Router } from 'express';
import { newSearch } from '../controllers/duckduckgo.controller';

const router = Router();

router.post('/search', newSearch);

export default router;

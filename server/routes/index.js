import express from 'express';
import { getPosts } from '../controllers';

const router = express.Router();

router.get('/', getPosts);

export default router;
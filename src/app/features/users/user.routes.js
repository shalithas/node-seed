import express from 'express';
import { getActiveUser } from './user.controller';

const router = express.Router();

router.get('/me', getActiveUser);

export default router;
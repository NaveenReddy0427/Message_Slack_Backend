import express from 'express';

import chanelRouter from './channel.js'
import memberRouter from './members.js'
import userRouter from './users.js';
import workspaceRouter from './workspaces.js'

const router = express.Router();

router.use('/users', userRouter);
router.use('/workspaces', workspaceRouter)
router.use('/channels', chanelRouter)
router.use('/members', memberRouter)

export default router;

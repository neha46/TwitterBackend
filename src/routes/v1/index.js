import express from 'express';
import TweetController from '../../controllers/tweet-controller.js';
const router=express.Router();

router.post('/tweets',TweetController);
export default router;

import express from 'express';

import userRouter from '#Routes/user.routes.js';

const expressApp = express();

expressApp.use(express.json());

expressApp.use('/user', userRouter);

export default expressApp;

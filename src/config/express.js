import express from 'express';

import fileRouter from '#Routes/files.routes.js';
import userRouter from '#Routes/user.routes.js';

const expressApp = express();

expressApp.use(express.json());

expressApp.use('/user', userRouter);
expressApp.use('/file', fileRouter);

expressApp.use((req, res, next) => {
  res.status(404).send({ errors: ['Endpoint not found'] });
});

export default expressApp;

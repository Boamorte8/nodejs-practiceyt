import express from 'express';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

import fileRouter from '#Routes/files.routes.js';
import userRouter from '#Routes/user.routes.js';

const expressApp = express();

expressApp.use(express.json());

const customDirname = dirname(fileURLToPath(import.meta.url));
expressApp.use(express.static(join(customDirname, '../public')));

expressApp.use('/user', userRouter);
expressApp.use('/file', fileRouter);

expressApp.use((req, res, next) => {
  res.status(404).send({ errors: ['Endpoint not found'] });
});

export default expressApp;

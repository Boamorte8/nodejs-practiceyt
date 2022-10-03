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

// Middleware to handle errors
expressApp.use((err, req, res, next) => {
  return res
    .status(404)
    .send({ errors: [err.message || 'Endpoint not found'] });
});

export default expressApp;

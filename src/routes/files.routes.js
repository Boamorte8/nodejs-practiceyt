import { Router } from 'express';

import fileGetImageController from '#Controllers/files/get-image.controller.js';
import fileGetTextController from '#Controllers/files/get-text.controller.js';
import userJWTDTO from '#Dto/user-jwt.dto.js';

const fileRouter = Router();

fileRouter.get('/text', userJWTDTO, fileGetTextController);
fileRouter.get('/image', userJWTDTO, fileGetImageController);

export default fileRouter;

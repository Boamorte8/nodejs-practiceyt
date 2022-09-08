import express from 'express';

const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());

// expressApp.use('/account', accountRouter);
// expressApp.use('/auth', authRouter);

export default expressApp;

import { Router } from 'express';

import UserModel from '#Schemas/user.schema.js';

const userRouter = Router();

userRouter.post('/register', async (req, res) => {
  const { guid, name } = req.body;

  try {
    const user = await UserModel.findById(guid).exec();
    if (user) return res.status(409).send('Account already exists');
    if (!name || !guid)
      return res.status(400).send('Name and guid are required');

    const newUser = new UserModel({ _id: guid, name });

    await newUser.save();
    return res.send('Account created successfully');
  } catch (error) {
    return res.status(400).send('Error creating account');
  }
});

userRouter.post('/login');

userRouter.get('/profile', async (req, res) => {
  const { guid } = req.params;
  try {
    const account = await UserModel.findById(guid).exec();
    if (!account) return res.status(404).send('No account found');
    return res.send(account);
  } catch (error) {
    return res.status(400).send('Error getting account');
  }
});

userRouter.patch('/update-data', async (req, res) => {
  const { guid } = req.params;
  const { name } = req.body;
  if (!name) return res.status(400).send('Name is required');
  try {
    const account = await UserModel.findById(guid).exec();
    if (!account) return res.status(404).send('No account found');
    account.name = name;
    await account.save();
    return res.send('Account updated successfully');
  } catch (error) {
    return res.status(400).send('Error getting account');
  }
});

userRouter.patch('/update-email');
userRouter.patch('/update-password');

// Delete an account
userRouter.delete('/unregister', async (req, res) => {
  const { guid } = req.params;
  try {
    const account = await UserModel.findById(guid).exec();
    if (!account) return res.status(404).send('No account found');
    await account.remove();
    return res.send('Account deleted successfully');
  } catch (error) {
    return res.status(400).send('Error deleting account');
  }
});

export default userRouter;

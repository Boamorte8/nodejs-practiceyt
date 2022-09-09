import { compare } from 'bcrypt';

import UserModel from '#Schemas/user.schema.js';

const userUnregisterController = async (req, res) => {
  const { id } = req;
  const { password } = req.body;
  try {
    const user = await UserModel.findById(id).exec();
    if (!user) return res.status(401).send('No authorized user');

    const matchPassword = await compare(password, user.password);
    if (!matchPassword) return res.status(401).send('No authorized user');

    await user.delete();
    return res.send('User was deleted successfully');
  } catch (error) {
    return res.status(400).send('Error deleting user');
  }
};

export default userUnregisterController;

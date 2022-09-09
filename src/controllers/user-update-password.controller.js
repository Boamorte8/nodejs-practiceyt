import { compare, hash } from 'bcrypt';

import UserModel from '#Schemas/user.schema.js';

const userUpdatePasswordController = async (req, res) => {
  const { id } = req;
  const { oldPassword, newPassword } = req.body;
  try {
    const user = await UserModel.findById(id).exec();
    if (!user) return res.status(401).send('No authorized user');

    const matchPassword = await compare(oldPassword, user.password);
    if (!matchPassword) return res.status(401).send('No authorized user');

    const hashedPassword = await hash(newPassword, 12);
    user.password = hashedPassword;

    await user.save();
    return res.send('User password was updated successfully');
  } catch (error) {
    return res.status(400).send('Error updating data');
  }
};

export default userUpdatePasswordController;

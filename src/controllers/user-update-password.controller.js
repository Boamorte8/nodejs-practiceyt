import { compare, hash } from 'bcrypt';

import { SALT } from '#Constants/salt.js';
import UserModel from '#Schemas/user.schema.js';

const userUpdatePasswordController = async (req, res) => {
  const { id } = req;
  const { oldPassword, newPassword } = req.body;
  try {
    const user = await UserModel.findById(id).exec();
    if (!user) return res.status(401).send({ errors: ['No authorized user'] });

    const matchPassword = await compare(oldPassword, user.password);
    if (!matchPassword)
      return res.status(401).send({ errors: ['No authorized user'] });

    const hashedPassword = await hash(newPassword, SALT);
    user.password = hashedPassword;

    await user.save();
    return res.send('User password was updated successfully');
  } catch (error) {
    return res.status(400).send({ errors: ['Error updating data'] });
  }
};

export default userUpdatePasswordController;

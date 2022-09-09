import { compare } from 'bcrypt';

import UserModel from '#Schemas/user.schema.js';

const userUpdateEmailController = async (req, res) => {
  const { id } = req;
  const { email, password } = req.body;
  try {
    const user = await UserModel.findById(id).exec();
    if (!user) return res.status(401).send({ errors: ['No authorized user'] });

    const matchPassword = await compare(password, user.password);
    if (!matchPassword)
      return res.status(401).send({ errors: ['No authorized user'] });

    user.email = email;
    await user.save();
    return res.send('User email was updated successfully');
  } catch (error) {
    return res.status(400).send({ errors: ['Error updating data'] });
  }
};

export default userUpdateEmailController;

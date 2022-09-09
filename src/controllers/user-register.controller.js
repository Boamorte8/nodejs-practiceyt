import { hash } from 'bcrypt';

import UserModel from '#Schemas/user.schema.js';

const userRegisterController = async (req, res) => {
  const { _id, name, surname, email, password } = req.body;

  try {
    const user = await UserModel.findById(_id).exec();
    if (user) return res.status(409).send('User already registered');

    const userByEmail = await UserModel.findOne({ email }).exec();
    if (userByEmail) return res.status(409).send('Email already registered');

    const hashedPassword = await hash(password, 12);
    const newUser = new UserModel({
      _id,
      name,
      surname,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.send('User registered successfully');
  } catch (error) {
    return res.status(400).send('Error registering user');
  }
};

export default userRegisterController;

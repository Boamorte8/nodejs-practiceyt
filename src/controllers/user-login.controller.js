import { compare } from 'bcrypt';
import { SignJWT } from 'jose';

import UserModel from '#Schemas/user.schema.js';

const userLoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userByEmail = await UserModel.findOne({ email }).exec();
    if (!userByEmail)
      return res.status(401).send('Email y/o password are wrong');

    const matchPassword = await compare(password, userByEmail.password);
    if (!matchPassword)
      return res.status(401).send('Email y/o password are wrong');

    const jwtConstructor = new SignJWT({ id: userByEmail._id });
    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

    return res.status(201).send({
      message: `User authenticated successfully`,
      jwt,
    });
  } catch (error) {
    return res.status(401).send('Error authenticating user');
  }
};

export default userLoginController;

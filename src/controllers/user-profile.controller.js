import UserModel from '#Schemas/user.schema.js';

const userProfileController = async (req, res) => {
  const { id } = req;
  try {
    const user = await UserModel.findById(id).exec();
    if (!user) return res.status(401).send('No authorized user');
    const { _id, name, surname, email } = user;
    return res.send({ id: _id, name, surname, email });
  } catch (error) {
    return res.status(400).send('Error getting profile');
  }
};

export default userProfileController;

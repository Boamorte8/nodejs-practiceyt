import UserModel from '#Schemas/user.schema.js';

const userUpdateDataController = async (req, res) => {
  const { id } = req;
  const { name, surname } = req.body;
  try {
    const user = await UserModel.findById(id).exec();
    if (!user) return res.status(401).send('No authorized user');
    user.name = name;
    user.surname = surname;
    await user.save();
    return res.send('User was updated successfully');
  } catch (error) {
    return res.status(400).send('Error updating data');
  }
};

export default userUpdateDataController;

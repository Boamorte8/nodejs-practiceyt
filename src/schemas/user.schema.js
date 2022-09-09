import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const userSchema = Schema({
  _id: {
    type: String,
    _id: false,
  },
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  surname: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = model('User', userSchema);

export default UserModel;

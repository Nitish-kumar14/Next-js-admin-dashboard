// add 
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  employeeId: {
    type: String,
    required: true
  },
  doj: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;

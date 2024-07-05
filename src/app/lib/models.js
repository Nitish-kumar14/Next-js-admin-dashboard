import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
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
  
password: {
    type: String,
    required: true
  }
});



const productSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        unique: true,
      },
      desc: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      stock: {
        type: Number,
        required: true,
        min: 0,
      },
      img: {
        type: String,
      },
      color: {
        type: String,
      },
      size: {
        type: String,
      },
    },
    { timestamps: true }
  );


  export const User = mongoose.models.User || mongoose.model('User', userSchema);
  

  export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

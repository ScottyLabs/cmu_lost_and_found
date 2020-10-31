import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  description: {
    type: String,
    required: true
  },
  dateFound: {
    type: Date,
    default: Date.now
  },
  foundLoc: {
    type: String,
    required: true
  },
  retrievalLoc: {
    type: String,
    enum: ['CUC', 'Gates'],
  },
  contactInfo: {
    email: String,
    phone: String
  },
  image: {
    img: URL
  },
  status: {
    type: Boolean,
    default: false
  }
});

export default ItemSchema;

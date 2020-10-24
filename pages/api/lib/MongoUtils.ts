import mongoose from "mongoose";

let connectToMongo = async () => {
  const connection = await mongoose.createConnection(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true,
    }
  );
  return connection;
}

export { connectToMongo }

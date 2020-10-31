// Source: https://codeconqueror.com/blog/using-a-database-with-next-js

import mongoose from "mongoose";
import UserSchema from "./models/User";
import { connectToMongo } from "./lib/MongoUtils";

export default async (req, res) => {
  const connection = await connectToMongo();
  try {
    const User = connection.model("User", UserSchema);
    const {
      query: { name },
      method,
    } = req;
    switch (method) {
      case "POST":
        User.create({ name }, (error, user) => {
          if (error) {
            connection.close();
            res.status(500).json({ error });
          } else {
            res.status(200).json(user);
            connection.close();
          }
        });
        break;
      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (e) {
    connection.close();
    res.status(500).json({ error: e.message || "something went wrong" });
  }
};

import mongoose from "mongoose";

const connection = {};
const connect = async () => {
  if (connection.isConnected) {
    console.log("connected using existing connection");
    return;
  }
  const url = "mongodb://localhost:27017/nextjs14";
  try {
    const db = await mongoose.connect(url);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("error while connecting with the database");
  }
};

export default connect;

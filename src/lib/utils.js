import mongoose from "mongoose"

//make the db connection
const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    //create a new connection
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
import mongoose from "mongoose";

export const ConnectionDB = async () => {
  try {
    const Mongobd_Url = process.env.Mongobd_Url;

    const connection = await mongoose.connect(Mongobd_Url, {
      dbName: "Tasks",
    });

    console.log("================================================");
    console.log("Database connect ");
  } catch (error) {
    console.log(error);
  }
};

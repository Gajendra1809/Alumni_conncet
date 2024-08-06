import mongoose from "mongoose";

const mongoDB = async () => {
    const mongoURI= process.env.MONGO_URI;
    await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Mongo connected');
}

export default mongoDB;
import mongoose from "mongoose";

const DB_CONNECTION_URL = "mongodb://admin:admin123@localhost:27017/whatsapp?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectDB = () => {
    console.log(`DB trying to connect on ${new Date()}`);
    const options = {
        keepAlive: 1,
        // autoReconnect: true,
        // poolSize: 10,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    return mongoose.connect(DB_CONNECTION_URL, options);
};

export default connectDB;
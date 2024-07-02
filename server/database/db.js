import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const MONGODB_URI = process.env.MONGODB_URI;
    // const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSSWORD}@file-sharing-app.6u0zoky.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with database', error.message);
    }
}

export default DBConnection;
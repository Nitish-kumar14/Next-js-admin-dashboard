import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
    if (isConnected) {
        console.log('Already connected to the database');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 
        });
        isConnected = true;
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Database connection failed');
    }
};

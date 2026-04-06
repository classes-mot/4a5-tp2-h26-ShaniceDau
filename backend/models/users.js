import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    games: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'Games', 
        },
    ],
});

export const User = mongoose.model('User', games)

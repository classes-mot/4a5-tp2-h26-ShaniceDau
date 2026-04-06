import mongoose from "mongoose";

const gameSchemas = new mongoose.Schema({
    titre: { type: String, required: true },
    categorie: { type: String, required: true },
    nombreJoueurs: { Number, required: true },
    duree: { Number, required: true },

})

export const Game = mongoose.model('Games', gameSchemas);
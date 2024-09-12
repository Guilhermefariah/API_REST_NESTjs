import { Schema } from "mongoose";

export const BookSchema = new Schema({ 
    name: String,
    author: String,
    language: String,
    releaseYear: Number,
    publisher: String,
    pages: Number
})
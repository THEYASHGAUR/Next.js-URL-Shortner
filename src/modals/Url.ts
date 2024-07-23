import mongoose, { Document, Model, Schema } from "mongoose";


const urlSchema = new mongoose.Schema({
    
    originalUrl: {
        type: String,
        required: true,
        unique: true
    },
    
    shortUrl: {
        type: String,
        required: true,
        unique: true
    }
}, {
    // Enable timestamps to automatically add createdAt and updatedAt fields
    timestamps: true,
});

// Define the IUrl interface extending the Document interface from mongoose
export interface IUrl extends Document {
    originalUrl: string, 
    shortUrl: string,    
}

// Create the Url model if it doesn't already exist, or use the existing model
const Url: Model<IUrl> = mongoose.models.Url || mongoose.model<IUrl>('Url', urlSchema);


export default Url;


import Url, { IUrl } from "../modals/Url";
import connectDB from "@/config/db";


export default class UrlRepository {
    private urlModel;

    // Constructor to initialize the Url model and connect to the database
    constructor() {
        connectDB(); 
        this.urlModel = Url; // Assign the Url model to the urlModel property
    }

    // Asynchronous method to get a URL by its ID
    async getUrlById(id: string): Promise<IUrl | null> {
        return await this.urlModel.findById(id).lean(); 
    }

    // Asynchronous method to get a URL by its short URL
    async getUrlByShortUrl(shortUrl: string): Promise<IUrl | null> {
        return await this.urlModel.findOne({ shortUrl }).lean(); 
    }

    // Asynchronous method to get a URL by its original URL
    async getUrlByOriginalUrl(originalUrl: string): Promise<IUrl | null> {
        return await this.urlModel.findOne({ originalUrl }).lean(); 
    }

    // Asynchronous method to get all URLs
    async getAllUrls(): Promise<IUrl[]> {
        return await this.urlModel.find().lean(); 
    }

    // Asynchronous method to delete a URL by its ID
    async deleteUrl(id: string): Promise<IUrl | null> {
        return await this.urlModel.findByIdAndDelete(id).lean(); 
    }

    // Asynchronous method to create a new URL entry
    async createUrl(originalUrl: string, shortUrl: string): Promise<IUrl> {
        return await this.urlModel.create({ shortUrl, originalUrl }); 
    }

    // Asynchronous method to update a URL by its ID
    async updateUrl(id: string, updateData: Partial<IUrl>): Promise<IUrl | null> {
        return await this.urlModel.findByIdAndUpdate(id, updateData, { new: true }).lean(); 
    }
}

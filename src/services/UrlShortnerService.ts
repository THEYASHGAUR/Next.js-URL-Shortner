
import UrlRepository from "@/repositories/UrlRepository";

// for generating unique short URLs
import shortId from 'shortid';


export class UrlShortenerService {
    private urlRepository;

    // Constructor to initialize the UrlRepository instance
    constructor() {
        this.urlRepository = new UrlRepository();
    }

    // Asynchronous method to shorten a given URL
    async shortenUrl(originalUrl?: string): Promise<string> {
        
        if (!originalUrl) {
            return "";
        }

        // Check if the URL is already in the repository
        let url = await this.urlRepository.getUrlByOriginalUrl(originalUrl);
        if (url) {
            return url.shortUrl; // Return the existing short URL if found
        }

        // Generate a unique short URL
        let shortUrl = shortId();
        url = await this.urlRepository.getUrlByShortUrl(shortUrl);
        
        // Ensure the generated short URL is unique
        while (url) {
            shortUrl = shortId();
            url = await this.urlRepository.getUrlByShortUrl(shortUrl);
        }

        // Store the original and short URL in the repository
        await this.urlRepository.createUrl(originalUrl, `urls/${shortUrl}`);
        return shortUrl; 
    }

    // Asynchronous method to get all URLs from the repository
    async getAllUrls() {
        return await this.urlRepository.getAllUrls();
    }

    // Asynchronous method to get a URL by its short URL
    async getUrlByShortUrl(shortUrl: string) {
        return await this.urlRepository.getUrlByShortUrl(shortUrl);
    }

    
}

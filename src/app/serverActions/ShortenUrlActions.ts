'use server'

import { UrlShortenerService } from "../../services/UrlShortnerService";

// Import the revalidatePath function from Next.js cache
import { revalidatePath } from "next/cache";


const shortenURL = async (formData: FormData) => {
    // Extract the original URL from the form data
    const originalUrl : string = formData.get('originalUrl') as string;
    console.log("Original URL Passed is ", originalUrl); 

    // Create an instance of the UrlShortenerService class
    const shortenerService = new UrlShortenerService();

    // Call the shortenUrl method to get the shortened URL
    const shortUrl = await shortenerService.shortenUrl(originalUrl);

    // Revalidate the path to ensure the URLs list is up-to-date
    revalidatePath('/urls');
}


export default shortenURL;

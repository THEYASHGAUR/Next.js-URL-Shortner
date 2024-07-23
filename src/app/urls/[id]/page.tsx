import { UrlShortenerService } from "../../../services/UrlShortnerService";
import { redirect } from "next/navigation";

// Function to fetch the original URL using the short URL
async function fetchOriginalUrl(url: string) {
    const urlService = new UrlShortenerService(); // Create an instance of UrlShortenerService
    const response = await urlService.getUrlByShortUrl(url); // Fetch the original URL
    return response?.originalUrl; 
}

// Function to handle redirection based on the short URL
export default async function urlRedirect({ params }: { params: { id: string } }) {
    console.log(params.id); 
    const original = await fetchOriginalUrl(`urls/${params.id}`); // Fetch the original URL
    if (original) {
        redirect(original); 
    } else {
        redirect('/404'); 
    }
    return null; 
}

import { UrlShortenerService } from "../../../services/UrlShortnerService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { originalUrl } = await req.json(); // Extract originalUrl from the request body
    const shortenerService = new UrlShortenerService(); // Create an instance of UrlShortenerService
    const shortUrl = await shortenerService.shortenUrl(originalUrl); // Generate the short URL
    return NextResponse.json({ shortUrl }, { status: 201 });
}

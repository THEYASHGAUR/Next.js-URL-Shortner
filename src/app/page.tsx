"use client";

import Link from "next/link";
import shortenURL from "./serverActions/ShortenUrlActions";



export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-cyan-950">
        <div className="p-10 bg-white rounded-lg shadow-2xl max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">URL SHORTENER</h1>


        <form method="POST" action={shortenURL} className="space-y-6">
          <input type="text" placeholder="Enter URL" name="originalUrl" className="input input-bordered w-full" />


          <button type="submit" className="btn btn-success w-full">Shorten</button>

        </form>

          
        </div>

        <div className="mt-6 text-center">
          <Link href="/urls">
          
            <span className="btn btn-accent w-full"> View All Shortened URLS </span>
          </Link>
        </div>
      </div>
    </>
  );
}
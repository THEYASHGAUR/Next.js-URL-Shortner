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


          <div className="flex w-full bg-slate-200 my-5 p-3 mt-20 py-3">
            <span className=" w-[90%]">
              <a
                // href={`/${url.shortUrl}`}
                target="_blank"
                className="link link-primary"
              >
                {/* {`${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`} */}
              </a>
            </span>
            
            <span className="flex cursor-pointer m-2 border-l-2"><svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="leafygreen-ui-10ohsvb" role="presentation" aria-hidden="true"><path fill="#001E2B" fill-rule="evenodd" d="M1 5.714v4.572C1 11.233 1.768 12 2.714 12H5.75V7.11c0-.566.227-1.108.63-1.504l2.294-2.252c.1-.099.21-.186.326-.262v-.378C9 1.768 8.232 1 7.286 1H5.8v3.429c0 .71-.576 1.285-1.286 1.285H1Zm8-.928L7.257 6.498A.857.857 0 0 0 7 7.11v.688h3.01a.857.857 0 0 0 .857-.858V4h-.717a.857.857 0 0 0-.6.246l-.55.54ZM4.867 1H4.15a.857.857 0 0 0-.601.246L1.257 3.498A.857.857 0 0 0 1 4.11v.688h3.01a.857.857 0 0 0 .857-.858V1ZM7 12V8.714H10.514c.71 0 1.286-.575 1.286-1.285V4h1.486C14.233 4 15 4.768 15 5.714v7.572c0 .947-.768 1.714-1.714 1.714H8.714A1.714 1.714 0 0 1 7 13.286V12Z" clip-rule="evenodd"></path></svg></span>

          </div>

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


# Next.js URL Shortener

A simple URL shortening service built with Next.js.

## Features

- Shorten long URLs
- Redirect short URLs to their original URLs
- View all shortened URLs

## Technologies Used

- Next.js
- TypeScript
- TailwindCSS
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/THEYASHGAUR/Next.js-URL-Shortner.git
   cd Next.js-URL-Shortner
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```bash
   MONGODB_URI=<your_mongodb_connection_string>
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

- `components/`: React components
- `pages/`: Next.js pages
- `services/`: Business logic for URL shortening
- `repositories/`: Data access logic
- `modals/`: Mongoose models
- `config/`: Database configuration

## API Endpoints

- `POST /api/shorten`: Shorten a URL
- `GET /:shortUrl`: Redirect to the original URL

## MORE UPDATES ARE COMING SOON.!!!!!
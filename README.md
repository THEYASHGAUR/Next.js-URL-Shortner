

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

## Usage

### Shorten a URL

1. Enter a URL in the input field on the home page.
2. Click "Shorten" to generate a short URL.
3. The short URL will be displayed below the form.

### View All Shortened URLs

1. Click "View All Shortened URLS" on the home page.
2. See a list of all shortened URLs and their corresponding original URLs.

## Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.

---

Feel free to customize this README file further based on your specific needs or any additional details you want to include.
# Backend

1. Install MongoDB and make sure it is running.
2. Copy `.env.example` to `.env`.
3. `npm install`
4. `npm run dev`

Optional Google image search:
- Enable Google Custom Search JSON API.
- Create a Programmable Search Engine and copy its CX.
- Put `GOOGLE_API_KEY` and `GOOGLE_CX` in `.env`.

The app does NOT scrape Google result pages. It uses Google's official Custom Search JSON API when configured, with the quiz's built-in image URLs as the normal fallback.

import express from 'express';
const router = express.Router();
router.get('/search', async (req, res) => {
  const q = String(req.query.q || '').trim();
  if (!q) return res.status(400).json({ message: 'Search term required' });
  if (!process.env.GOOGLE_API_KEY || !process.env.GOOGLE_CX) {
    return res.json({ provider: 'fallback', images: [], message: 'Add GOOGLE_API_KEY and GOOGLE_CX to use Google Custom Search.' });
  }
  try {
    const url = `https://www.googleapis.com/customsearch/v1?key=${encodeURIComponent(process.env.GOOGLE_API_KEY)}&cx=${encodeURIComponent(process.env.GOOGLE_CX)}&searchType=image&num=10&q=${encodeURIComponent(q)}`;
    const r = await fetch(url);
    const data = await r.json();
    res.json({ provider: 'google', images: (data.items || []).map(x => ({ title: x.title, link: x.link, thumbnail: x.image?.thumbnailLink })) });
  } catch (e) { res.status(500).json({ message: e.message }); }
});
export default router;

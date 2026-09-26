# Google AdSense setup

This project contains an AdSense-ready, reusable `AdBanner` component. Ads are **disabled by default** so local development does not request ads until you configure them.

## 1. Create your environment file

From `frontend/`:

```powershell
copy .env.example .env
```

Then set:

```env
VITE_ADS_ENABLED=true
VITE_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
VITE_AD_SLOT_TOP=1234567890
VITE_AD_SLOT_HOME=1234567891
VITE_AD_SLOT_CREATE=1234567892
VITE_AD_SLOT_QUIZ=1234567893
VITE_AD_SLOT_RESULT=1234567894
VITE_AD_SLOT_BOTTOM=1234567895
```

Use the exact publisher/client ID and ad-unit slot IDs supplied by your AdSense account. Do not copy these example numbers.

## 2. How the component works

`src/components/AdBanner.jsx`:

- Loads the official AdSense script once.
- Uses responsive `data-ad-format="auto"` and `data-full-width-responsive="true"`.
- Renders nothing when ads are disabled or configuration is missing.
- Can be reused on any page:

```jsx
<AdBanner slot={import.meta.env.VITE_AD_SLOT_HOME} />
```

## 3. Current placements

- Global top banner
- Home page
- Create quiz page
- Answer quiz page
- Result page
- Created/share page
- Global bottom banner

The quiz UI does not insert ads between answer choices.

## 4. Before production

1. Create/configure your AdSense account and add your site according to Google's current requirements.
2. Create the ad units you want and copy their slot IDs into `.env`.
3. Keep `.env` out of git. The `.gitignore` should include `.env`.
4. Build the frontend with `npm run build` and deploy the generated `dist/` folder.
5. Follow the current AdSense program policies, consent/privacy requirements that apply to your visitors, and Google's instructions for `ads.txt` if AdSense asks you to add it.

## Important

AdSense approval is not guaranteed just because the code is present. The site still needs to meet Google's eligibility, content, traffic, privacy/consent, and program-policy requirements.

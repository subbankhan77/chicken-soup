# HR02 — Website

A one-page site for a local chicken & mutton soup shop. Built with Next.js 15 (App Router), JavaScript and Tailwind CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Before going live — update these

All shop details live in **`data/shop.js`**:

| Field            | What to put                                                        |
| ---------------- | ------------------------------------------------------------------ |
| `name`           | Real shop name                                                     |
| `phone`          | Owner's number with country code, e.g. `+919876543210`             |
| `phoneDisplay`   | How the number is shown, e.g. `+91 98765 43210`                    |
| `whatsappNumber` | Digits only with country code, e.g. `919876543210`                 |
| `address`        | Shop address                                                       |
| `mapsUrl`        | Google Maps → Share → Copy link                                    |
| `mapsEmbedUrl`   | Google Maps → Share → Embed a map → the `src` value (optional)     |
| `hours`          | Opening hours                                                      |
| `siteUrl`        | The website's real domain (used for SEO previews)                  |

## Updating the menu

Edit **`data/products.js`**: categories, names, descriptions, prices (numbers only) and the optional `note` (portion size, e.g. "Half plate"). To change a photo, put a new image in `public/images/menu/` and update the `image` path.

## How ordering works

Customers fill in the order form, then WhatsApp opens with a pre-written message addressed to `whatsappNumber`. The customer reviews it and taps **Send**. Orders aren't confirmed automatically: the owner confirms each one by replying on WhatsApp.

## Photo credits

- **Menu photos** (`public/images/menu/`) are real-world photos from Wikimedia Commons, used under Creative Commons licences that require crediting the photographer. The credits are listed in `data/photoCredits.js` and shown under "Photo credits" in the website footer, so keep that list in sync. When you replace a photo with the shop's own, delete its credit line.
- **Hero and About photos** are from [Unsplash](https://unsplash.com) (free to use, no credit required).

The best option is to replace them all with real photos of the shop's own dishes.

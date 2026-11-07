// ─────────────────────────────────────────────────────────────
//  SHOP SETTINGS — edit this file to update the shop's details.
//  Everything marked "REPLACE" is a placeholder and must be
//  updated with the owner's real information before going live.
// ─────────────────────────────────────────────────────────────

export const shop = {
  // Shop name & tagline
  name: "HR02",
  tagline: "Soups · Snacks · Rolls",
  description:
    "Hot chicken and mutton soups, plus chowmein, momos, burgers, rolls and egg specials — made fresh every evening.",

  // Phone number used for "Call Now".
  // Include the country code, e.g. "+919876543210".
  phone: "+917611878786",
  // How the phone number is shown on the website.
  phoneDisplay: "+91 76118 78786",

  // WhatsApp number that receives orders.
  // Digits only, with country code and no "+", spaces or dashes, e.g. "919876543210".
  whatsappNumber: "917611878786",

  // Every order from the website is also emailed here (via FormSubmit.co).
  // The very first order sends an "Activate Form" email to this address —
  // click the button in it once, otherwise no order emails will arrive.
  email: "umartanwar027@gmail.com",

  // Where to find us, in time order. Each location has its own hours and map link.
  // `mapsUrl` currently searches the address; for an exact pin, open the place in
  // Google Maps → Share → Copy link, and paste it here.
  // `opens` / `closes` (24-hour "HH:MM") are only used for Google search info.
  locations: [
    {
      label: "Daytime",
      time: "10:00 AM – 6:00 PM",
      opens: "10:00",
      closes: "18:00",
      address: "Shivaji Nagar, Bismillah Colony, Jagannath Puri, Suraj Nagar, Jhotwara, Jaipur, Rajasthan – 302012",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Shivaji+Nagar%2C+Bismillah+Colony%2C+Jagannath+Puri%2C+Suraj+Nagar%2C+Jhotwara%2C+Jaipur%2C+Rajasthan+302012",
    },
    {
      label: "Evening",
      time: "6:30 PM – 11:00 PM",
      opens: "18:30",
      closes: "23:00",
      address: "Laxmi Nagar III, Jagannath Puri, Suraj Nagar, Jhotwara, Jaipur, Rajasthan – 302012",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Laxmi+Nagar+III%2C+Jagannath+Puri%2C+Suraj+Nagar%2C+Jhotwara%2C+Jaipur%2C+Rajasthan+302012",
    },
  ],

  // Optional: Google Maps embed URL to show a live map on the page.
  // Google Maps → Share → Embed a map → copy only the "src" value.
  // Leave empty ("") to show a placeholder card instead.
  mapsEmbedUrl: "",

  // Currency symbol used for all prices.
  currency: "₹",

  // Public website address — used for SEO / social sharing previews (REPLACE).
  siteUrl: "https://example.com",
};

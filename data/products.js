// ─────────────────────────────────────────────────────────────
//  MENU — edit names, descriptions and prices here.
//  Prices are plain numbers (no currency symbol); the symbol is
//  set in data/shop.js. Images live in /public/images.
// ─────────────────────────────────────────────────────────────

export const categories = [
  {
    id: "chicken",
    name: "Chicken Soup",
    tagline: "Light, warming & comforting",
    description:
      "Golden broths simmered from fresh chicken, pepper and herbs — from clear and soothing to fiery and bold.",
    image: "/images/category-chicken.jpg",
  },
  {
    id: "mutton",
    name: "Mutton Soup",
    tagline: "Rich, hearty & slow-cooked",
    description:
      "Deep, nourishing soups cooked for hours with tender mutton, bones and whole spices.",
    image: "/images/category-mutton.jpg",
  },
];

export const products = [
  {
    id: "chicken-clear-soup",
    name: "Chicken Clear Soup",
    category: "chicken",
    description:
      "A light, clear broth with tender chicken, fresh vegetables and a hint of black pepper.",
    price: 80,
    image: "/images/chicken-clear-soup.jpg",
    tag: "Light & Healthy",
  },
  {
    id: "chicken-special-soup",
    name: "Chicken Special Soup",
    category: "chicken",
    description:
      "Our house favourite — a rich, creamy chicken broth loaded with shredded chicken and herbs.",
    price: 120,
    image: "/images/chicken-special-soup.jpg",
    tag: "Bestseller",
  },
  {
    id: "spicy-chicken-soup",
    name: "Spicy Chicken Soup",
    category: "chicken",
    description:
      "A fiery broth with chicken pieces, crushed chillies and ginger. Perfect for cold evenings.",
    price: 110,
    image: "/images/spicy-chicken-soup.jpg",
    tag: "Hot & Spicy",
  },
  {
    id: "mutton-soup",
    name: "Mutton Soup",
    category: "mutton",
    description:
      "Classic slow-cooked mutton soup with tender pieces, onion, garlic and aromatic spices.",
    price: 150,
    image: "/images/mutton-soup.jpg",
    tag: "Classic",
  },
  {
    id: "mutton-paya-soup",
    name: "Mutton Paya Soup",
    category: "mutton",
    description:
      "Traditional trotters soup, simmered overnight until the broth turns rich and nourishing.",
    price: 180,
    image: "/images/mutton-paya-soup.jpg",
    tag: "Traditional",
  },
  {
    id: "special-mutton-soup",
    name: "Special Mutton Soup",
    category: "mutton",
    description:
      "Our signature mutton soup with extra meat, bone marrow and a special house spice blend.",
    price: 200,
    image: "/images/special-mutton-soup.jpg",
    tag: "Chef's Special",
  },
];

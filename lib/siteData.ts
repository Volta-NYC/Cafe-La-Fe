export const SITE = {
  name: "Pulse Coffee",
  tagline: "Matcha, coffee, and fresh bakery in South Slope, Brooklyn",
  phone: "",
  email: "hello@pulsecoffee.nyc",
  address: "475 5th Ave, Brooklyn, NY 11215",
  hours: "7:00 AM - 6:00 PM daily",
  mapsUrl: "https://www.google.com/maps?q=475+5th+Ave,+Brooklyn,+NY+11215",
  socials: {
    instagram: "https://instagram.com/pulsecoffee.nyc",
  },
};

export const NAV = [
  { label: "Menu", href: "/menu" },
  { label: "Locations", href: "/locations" },
  { label: "Calendar", href: "/calendar" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
] as const;

export const PHOTOS = {
  hero: "https://pub-ba1a74be17d7442a9f2541946eb9510e.r2.dev/shops/10695253-569f-48d3-801a-642b51ce92e1/0.jpg",
  storefront: "https://pub-ba1a74be17d7442a9f2541946eb9510e.r2.dev/shops/10695253-569f-48d3-801a-642b51ce92e1/1.jpg",
  interior: "https://pub-ba1a74be17d7442a9f2541946eb9510e.r2.dev/shops/10695253-569f-48d3-801a-642b51ce92e1/0.jpg",
  shot0: "https://pub-ba1a74be17d7442a9f2541946eb9510e.r2.dev/shops/10695253-569f-48d3-801a-642b51ce92e1/0.jpg",
  shot1: "https://pub-ba1a74be17d7442a9f2541946eb9510e.r2.dev/shops/10695253-569f-48d3-801a-642b51ce92e1/1.jpg",
  shot2: "https://pub-ba1a74be17d7442a9f2541946eb9510e.r2.dev/shops/10695253-569f-48d3-801a-642b51ce92e1/2.png",
  shot3: "https://pub-ba1a74be17d7442a9f2541946eb9510e.r2.dev/shops/10695253-569f-48d3-801a-642b51ce92e1/0.jpg",
  shot4: "https://pub-ba1a74be17d7442a9f2541946eb9510e.r2.dev/shops/10695253-569f-48d3-801a-642b51ce92e1/1.jpg",
} as const;

export const MENU_SECTIONS = [
  {
    title: "Coffee",
    items: [
      { name: "Espresso", price: "$3.50", desc: "Balanced shot with a rich crema finish." },
      { name: "Americano", price: "$4.25", desc: "Espresso opened up with hot water." },
      { name: "Cappuccino", price: "$5.25", desc: "Velvety milk foam over double espresso." },
      { name: "Latte", price: "$5.75", desc: "Smooth espresso with silky steamed milk." },
      { name: "Cold Brew", price: "$5.50", desc: "Slow-steeped and extra refreshing." },
      { name: "Maple Oat Latte", price: "$6.25", desc: "Oat milk latte with warm maple sweetness." },
    ],
  },
  {
    title: "Matcha & Tea",
    items: [
      { name: "Matcha Latte", price: "$6.25", desc: "Whisked to order with vibrant ceremonial matcha." },
      { name: "Iced Matcha", price: "$6.25", desc: "Bright, grassy matcha poured over ice." },
      { name: "Strawberry Matcha", price: "$6.95", desc: "House strawberry puree layered with matcha." },
      { name: "Chai Latte", price: "$5.75", desc: "Spiced chai with steamed milk." },
      { name: "Sencha Tea", price: "$4.50", desc: "Clean, soothing green tea." },
    ],
  },
  {
    title: "Bakery",
    items: [
      { name: "Fresh Croissant", price: "$4.75", desc: "Made from scratch daily with flaky layers." },
      { name: "Pain au Chocolat", price: "$5.25", desc: "Buttery laminated pastry with chocolate." },
      { name: "Samsa", price: "$6.50", desc: "Savory pastry baked fresh in house." },
      { name: "Crepes", price: "$8.50", desc: "Tender crepes with sweet or savory fillings." },
      { name: "Khachapuri", price: "$11.50", desc: "Georgian cheese bread and a Pulse specialty." },
    ],
  },
  {
    title: "Bites",
    items: [
      { name: "Avocado Toast", price: "$9.50", desc: "Toasted sourdough with lemon and herbs." },
      { name: "Labneh Toast", price: "$9.95", desc: "Creamy labneh, herbs, and olive oil." },
      { name: "Breakfast Sandwich", price: "$8.95", desc: "Egg, cheese, and house sauce on a roll." },
      { name: "Seasonal Soup", price: "$7.50", desc: "Rotating house-made soup with bread." },
    ],
  },
] as const;

export const SOURCE_NOTE =
  "Menu imagery uses placeholders labeled for Pulse Coffee offerings until final item photography is added.";

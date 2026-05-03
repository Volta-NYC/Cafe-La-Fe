export const ORDER_URL =
  "https://order.snackpass.co/Cafe-La-Fe-(New-York-E-1st-St)-68bf08ea6bd808d485cb2af7";

export const SITE = {
  name: "Café La Fe",
  shortName: "La Fe",
  tagline: "Coffee, Community, Culture.",
  title: "Café La Fe | Coffee, Empanadas & Bubble Tea in East Village NYC",
  description:
    "Café La Fe is a vibrant East Village café serving organic coffee, handcrafted empanadas, specialty matcha, bubble tea, fresh juices, and plant-based treats in the heart of New York City.",
  phone: "(212) 718-0443",
  phoneHref: "tel:+12127180443",
  email: "hello@cafelafenyc.com",
  addressLine1: "70 E 1st St",
  cityStateZip: "New York, NY 10003",
  mapsUrl: "https://www.google.com/maps?q=70+E+1st+St,+New+York,+NY+10003",
  instagram: "https://www.instagram.com/cafelafenyc/",
  orderUrl: ORDER_URL,
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "Contact", href: "/contact" },
] as const;

export const HOURS = [
  { label: "Mon-Wed", value: "7:30 AM - 7:00 PM" },
  { label: "Thu", value: "7:30 AM - 8:00 PM" },
  { label: "Fri", value: "7:30 AM - 9:00 PM" },
  { label: "Sat", value: "9:00 AM - 8:30 PM" },
  { label: "Sun", value: "9:00 AM - 4:00 PM" },
] as const;

export const HERO_IMAGES = [
  { src: "/hero.jpeg", alt: "Café La Fe storefront at dusk" },
  { src: "/hero3.png", alt: "Café La Fe storefront with pink welcome sign" },
  { src: "/hero2.png", alt: "Café La Fe sidewalk cafe in the East Village" },
] as const;

export const GALLERY_IMAGES = [
  { src: "/gallery-01.png", alt: "Strawberry-topped pastry" },
  { src: "/gallery-02.png", alt: "Specialty coffee drink" },
  { src: "/gallery-03.png", alt: "Fresh baked muffins" },
  { src: "/gallery-04.png", alt: "Iced layered coffee with strawberry cream" },
  { src: "/gallery-05.png", alt: "Iced matcha drink" },
  { src: "/gallery-06.png", alt: "Soft-serve dessert with cookie" },
  { src: "/gallery-07.png", alt: "Cheesy arepas" },
  { src: "/gallery-08.png", alt: "Traditional breakfast plate" },
  { src: "/gallery-09.png", alt: "Arepa with seasoned beef and tomatoes" },
  { src: "/gallery-10.png", alt: "Bubble tea closeup" },
  { src: "/gallery-11.png", alt: "Coffee drink with cream topping" },
  { src: "/gallery-12.png", alt: "Cafe interior moment" },
  { src: "/gallery-13.png", alt: "Pastry display detail" },
  { src: "/gallery-14.png", alt: "Signature chocolate drink" },
  { src: "/gallery-15.png", alt: "Street-facing cafe facade" },
  { src: "/gallery-16.png", alt: "Neighborhood storefront scene" },
  { src: "/gallery-17.png", alt: "Bubble tea and dessert spread" },
  { src: "/gallery-18.png", alt: "Fresh-baked pastry closeup" },
] as const;

export const FEATURED_CATEGORIES = [
  {
    title: "Coffee",
    blurb: "Organic, fair-trade pours with cozy East Village energy.",
    image: "/gallery-11.png",
  },
  {
    title: "Empanadas",
    blurb: "Golden, handcrafted, and baked for comfort with every bite.",
    image: "/gallery-09.png",
  },
  {
    title: "Matcha",
    blurb: "Velvety green tea creations with bright fruit and floral notes.",
    image: "/gallery-05.png",
  },
  {
    title: "Bubble Tea",
    blurb: "Playful fusions, layered textures, and premium boba combinations.",
    image: "/gallery-10.png",
  },
  {
    title: "Fresh Juices",
    blurb: "Tropical refreshers for slow mornings and sunny afternoons.",
    image: "/gallery-04.png",
  },
] as const;

export const SIGNATURE_DRINKS = [
  {
    name: "Cookie Anointing",
    description: "Cookie butter and espresso blended into a silky summer latte.",
    image: "/gallery-11.png",
  },
  {
    name: "Strawberry Grace",
    description: "Bright strawberry espresso with a cloud-like finish.",
    image: "/gallery-04.png",
  },
  {
    name: "Divine Harmony",
    description: "Ube and coconut milk tea with your choice of pearls or lychee jelly.",
    image: "/gallery-10.png",
  },
  {
    name: "Golden Glory",
    description: "Matcha and mango bubble tea with lush tropical depth.",
    image: "/gallery-05.png",
  },
  {
    name: "Holy Bloom",
    description: "Lavender, vanilla, and espresso in a floral iced daydream.",
    image: "/gallery-02.png",
  },
] as const;

export const FAVORITES = [
  {
    name: "Large Chicken Empanada",
    price: "$6.25",
    description: "Dominican-style and warmly spiced, baked until golden.",
    image: "/gallery-09.png",
  },
  {
    name: "Large Beef Empanada",
    price: "$6.25",
    description: "Savory, rich, and one of the neighborhood favorites.",
    image: "/gallery-09.png",
  },
  {
    name: "Large Spinach & Cheese Empanada",
    price: "$6.25",
    description: "Creamy, satisfying, and perfect with coffee or tea.",
    image: "/gallery-07.png",
  },
  {
    name: "Cookie Anointing",
    price: "$7.15",
    description: "A signature seasonal latte with cookie-butter warmth.",
    image: "/gallery-11.png",
  },
  {
    name: "Pastel de Nata",
    price: "$3.90",
    description: "Buttery Portuguese custard tart with a caramelized finish.",
    image: "/gallery-01.png",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "A tiny East Village gem that feels personal the second you walk up. The drinks are creative, and the hospitality is the real signature.",
    author: "Neighborhood regular",
  },
  {
    quote:
      "The empanadas, matcha, and warm welcome make this a place you want to keep coming back to with friends.",
    author: "Downtown local",
  },
  {
    quote:
      "Café La Fe has that rare mix of comfort and originality. It feels joyful, calm, and made with real care.",
    author: "First-time visitor turned fan",
  },
] as const;

export const NEIGHBORHOOD_HIGHLIGHTS = [
  "Steps from the creative pulse of the East Village and Lower East Side.",
  "A welcoming stop for morning rituals, afternoon catch-ups, and late-day resets.",
  "Built around hospitality, cultural warmth, and food that feels handmade and personal.",
] as const;

export const ABOUT_STORY = [
  "We are Café La Fe. We opened our doors to share more than just a good cup of coffee — we share community, flavor, and care.",
  "Growing up in the Lower East Side, our owner Yarissa learned the value of home-cooked food, warm welcomes, and doing right by neighbors.",
  "We create our empanadas, arepas, juices, and plant-based treats with fresh, honest ingredients. Our coffees, matchas, and bubble teas are organic, fair trade, and crafted to honor both flavor and ethics.",
  "Here, everyone — family, friends, neighbors — is welcome. We aim to be a place where you can stop in for a morning pick-me-up, linger with a drink, or share a bite.",
] as const;

export const LOCATION_HIGHLIGHTS = [
  "A block that blends downtown movement with tucked-away café intimacy.",
  "People-watching patio seating under the awning when the weather cooperates.",
  "Easy to pair with a walk through St. Marks, Tompkins Square, or the LES.",
] as const;

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
  originalCategory: string;
  featured?: boolean;
};

export type MenuGroup = {
  slug: string;
  title: string;
  description: string;
  categories: readonly string[];
  items: readonly MenuItem[];
};

export const MENU_GROUPS: readonly MenuGroup[] = [
  {
    slug: "popular-picks",
    title: "Popular Picks",
    description: "Guest favorites and signatures that define Café La Fe right now.",
    categories: ["Popular"],
    items: [
      {
        name: "Large Chicken Empanada",
        price: "$6.25",
        description: "Dominican-style empanada with a gentle kick.",
        image: "/gallery-09.png",
        originalCategory: "Popular",
        featured: true,
      },
      {
        name: "Large Beef Empanada",
        price: "$6.25",
        description: "Hearty beef filling in a crisp, golden shell.",
        image: "/gallery-09.png",
        originalCategory: "Popular",
        featured: true,
      },
      {
        name: "Large Spinach & Cheese Empanada",
        price: "$6.25",
        description: "Savory spinach and cheese with a creamy finish.",
        image: "/gallery-07.png",
        originalCategory: "Popular",
        featured: true,
      },
      {
        name: "Cookie Anointing",
        price: "$7.15",
        description: "Cookie butter melted into your latte.",
        image: "/gallery-11.png",
        originalCategory: "Popular",
        featured: true,
      },
      {
        name: "Pastel de Nata",
        price: "$3.90",
        description: "Portuguese-style custard tart with a glossy burnished top.",
        image: "/gallery-01.png",
        originalCategory: "Popular",
        featured: true,
      },
      {
        name: "Passion Fruit Juice",
        price: "$8.00",
        description: "Bright and tropical, one of the most-loved refreshers.",
        image: "/gallery-04.png",
        originalCategory: "Popular",
      },
    ],
  },
  {
    slug: "coffee-bar",
    title: "Coffee Bar",
    description: "Espresso, lattes, and summer coffee creations built with warmth and lift.",
    categories: ["Lattes / Cappuccinos", "Summer Divine Coffee Creations", "Coffees", "Belgium Chocolate"],
    items: [
      {
        name: "Espresso",
        price: "$4.00",
        description: "A clean, focused shot with a rich finish.",
        image: "/gallery-11.png",
        originalCategory: "Coffees",
      },
      {
        name: "Americano",
        price: "$4.75",
        description: "Balanced espresso opened with hot water.",
        image: "/gallery-11.png",
        originalCategory: "Coffees",
      },
      {
        name: "Greek Coffee",
        price: "$5.25",
        description: "Strong, traditional, and beautifully aromatic.",
        image: "/gallery-11.png",
        originalCategory: "Coffees",
      },
      {
        name: "Iced Latte",
        price: "$6.50",
        description: "Smooth espresso with a chilled, creamy finish.",
        image: "/gallery-02.png",
        originalCategory: "Lattes / Cappuccinos",
      },
      {
        name: "Draft Latte",
        price: "$6.75",
        description: "Silky and refreshing, perfect for summer afternoons.",
        image: "/gallery-02.png",
        originalCategory: "Lattes / Cappuccinos",
      },
      {
        name: "Oat Milk Latte",
        price: "$6.95",
        description: "Soft oat sweetness with a rounded espresso body.",
        image: "/gallery-02.png",
        originalCategory: "Lattes / Cappuccinos",
      },
      {
        name: "Cappuccino",
        price: "$6.25",
        description: "Velvety foam, deep roast, and a polished finish.",
        image: "/gallery-11.png",
        originalCategory: "Lattes / Cappuccinos",
      },
      {
        name: "Iced Cinnamon Latte",
        price: "$7.00",
        description: "A café favorite with spice, sweetness, and chilled espresso.",
        image: "/gallery-04.png",
        originalCategory: "Lattes / Cappuccinos",
      },
      {
        name: "Heavenly Ube Latte",
        price: "$7.15",
        description: "Rich purple yam meets bold coffee soul.",
        image: "/gallery-10.png",
        originalCategory: "Summer Divine Coffee Creations",
      },
      {
        name: "Velvet Taro Espresso",
        price: "$7.15",
        description: "Sweet, creamy, and earthy iced bliss.",
        image: "/gallery-10.png",
        originalCategory: "Summer Divine Coffee Creations",
      },
      {
        name: "Rose Revival",
        price: "$7.15",
        description: "Elegant floral essence with deep roast character.",
        image: "/gallery-02.png",
        originalCategory: "Summer Divine Coffee Creations",
      },
      {
        name: "Fire & Glory",
        price: "$7.15",
        description: "Cinnamon bun and brown sugar espresso.",
        image: "/gallery-11.png",
        originalCategory: "Summer Divine Coffee Creations",
      },
      {
        name: "Holy Bloom",
        price: "$7.15",
        description: "Lavender, vanilla, and espresso in a soft floral blend.",
        image: "/gallery-02.png",
        originalCategory: "Summer Divine Coffee Creations",
      },
      {
        name: "Tiramisu Trinity",
        price: "$7.15",
        description: "Tiramisu notes with espresso and cocoa dust energy.",
        image: "/gallery-14.png",
        originalCategory: "Summer Divine Coffee Creations",
      },
      {
        name: "Strawberry Grace",
        price: "$7.15",
        description: "Strawberry espresso with a playful summer profile.",
        image: "/gallery-04.png",
        originalCategory: "Summer Divine Coffee Creations",
      },
      {
        name: "Toasted Blessing",
        price: "$7.15",
        description: "Campfire-inspired creaminess with espresso depth.",
        image: "/gallery-11.png",
        originalCategory: "Summer Divine Coffee Creations",
      },
      {
        name: "Celestial Cupcake",
        price: "$7.15",
        description: "Vanilla cupcake flavor folded into espresso.",
        image: "/gallery-11.png",
        originalCategory: "Summer Divine Coffee Creations",
      },
      {
        name: "Hazelnut Crown",
        price: "$7.15",
        description: "Buttery, nutty coffee made for a luxurious sip.",
        image: "/gallery-11.png",
        originalCategory: "Summer Divine Coffee Creations",
      },
      {
        name: "Belgian Chocolate",
        price: "$6.95",
        description: "Dense, smooth chocolate comfort served café-style.",
        image: "/gallery-14.png",
        originalCategory: "Belgium Chocolate",
      },
    ],
  },
  {
    slug: "matcha-tea",
    title: "Matcha, Tea & Flavor Fusions",
    description: "Organic tea, matcha, and bright house flavors with a tropical bend.",
    categories: ["Tea", "Divine Flavor Fusions", "Divine Matcha Fusions"],
    items: [
      {
        name: "Matcha Latte",
        price: "$6.95",
        description: "Organic matcha with a smooth, creamy body.",
        image: "/gallery-05.png",
        originalCategory: "Divine Matcha Fusions",
      },
      {
        name: "Strawberry Matcha",
        price: "$7.95",
        description: "Fruity and vivid with a silky green tea finish.",
        image: "/gallery-05.png",
        originalCategory: "Divine Matcha Fusions",
      },
      {
        name: "Passion Fruit Matcha",
        price: "$7.95",
        description: "Tangy tropical fruit and earthy matcha in balance.",
        image: "/gallery-05.png",
        originalCategory: "Divine Matcha Fusions",
      },
      {
        name: "Rose Matcha",
        price: "$7.75",
        description: "Floral and elegant with a gentle creamy lift.",
        image: "/gallery-05.png",
        originalCategory: "Divine Matcha Fusions",
      },
      {
        name: "Mango Matcha",
        price: "$7.95",
        description: "Juicy mango brightness layered into organic matcha.",
        image: "/gallery-05.png",
        originalCategory: "Divine Matcha Fusions",
      },
      {
        name: "Passion Fruit Fusion",
        price: "$7.50",
        description: "A vivid tea-based refresher with tropical energy.",
        image: "/gallery-04.png",
        originalCategory: "Divine Flavor Fusions",
      },
      {
        name: "Mango Fusion",
        price: "$7.50",
        description: "Juicy, sunny, and made for a warm downtown walk.",
        image: "/gallery-04.png",
        originalCategory: "Divine Flavor Fusions",
      },
      {
        name: "Rose Tea",
        price: "$5.50",
        description: "Soft floral fragrance with a calming finish.",
        image: "/gallery-11.png",
        originalCategory: "Tea",
      },
      {
        name: "Chamomile Tea",
        price: "$5.25",
        description: "Gentle, soothing, and perfect for a slower pause.",
        image: "/gallery-11.png",
        originalCategory: "Tea",
      },
      {
        name: "Green Tea",
        price: "$5.25",
        description: "Clean and refreshing with delicate grassy notes.",
        image: "/gallery-11.png",
        originalCategory: "Tea",
      },
    ],
  },
  {
    slug: "bubble-boba",
    title: "Bubble Tea Studio",
    description: "The playful side of the menu, from signature fusions to classic milk tea favorites.",
    categories: ["Fusion Bubble Teas", "Boba Drinks", "Morning Bubble Teas"],
    items: [
      {
        name: "Divine Harmony",
        price: "$9.90",
        description: "Ube and coconut milk tea with lychee jelly or tapioca pearls.",
        image: "/gallery-10.png",
        originalCategory: "Fusion Bubble Teas",
      },
      {
        name: "Mango Grace",
        price: "$9.90",
        description: "Mango and passion fruit tea with green tea jelly or passion fruit.",
        image: "/gallery-10.png",
        originalCategory: "Fusion Bubble Teas",
      },
      {
        name: "Chai Revelation",
        price: "$9.90",
        description: "Chai and tiramisu milk tea with tapioca pearls or lychee jelly.",
        image: "/gallery-10.png",
        originalCategory: "Fusion Bubble Teas",
      },
      {
        name: "Heaven's Velvet",
        price: "$9.90",
        description: "Taro and rose tea with strawberry hearts jelly or lychee popping boba.",
        image: "/gallery-10.png",
        originalCategory: "Fusion Bubble Teas",
      },
      {
        name: "Celestial Cloud",
        price: "$9.90",
        description: "Coconut and regular milk tea with tapioca pearls or mango.",
        image: "/gallery-10.png",
        originalCategory: "Fusion Bubble Teas",
      },
      {
        name: "Golden Glory",
        price: "$9.90",
        description: "Matcha and mango tea with green tea jelly or mango popping boba.",
        image: "/gallery-10.png",
        originalCategory: "Fusion Bubble Teas",
      },
      {
        name: "Brown Sugar Boba",
        price: "$8.95",
        description: "Classic milk tea sweetness with chewy pearls.",
        image: "/gallery-10.png",
        originalCategory: "Boba Drinks",
      },
      {
        name: "Ube Milk Tea",
        price: "$8.95",
        description: "Creamy purple yam with café-soft sweetness.",
        image: "/gallery-10.png",
        originalCategory: "Boba Drinks",
      },
      {
        name: "Morning Manna",
        price: "$8.75",
        description: "A bright early-day bubble tea designed for a softer wake-up.",
        image: "/gallery-10.png",
        originalCategory: "Morning Bubble Teas",
      },
    ],
  },
  {
    slug: "refreshers",
    title: "Fresh Juices & Smoothies",
    description: "Fruit-forward refreshment for summer energy and easy all-day sipping.",
    categories: ["Smoothies", "Fruit Refreshers"],
    items: [
      {
        name: "Mango Smoothie",
        price: "$8.25",
        description: "Creamy tropical mango with a refreshing finish.",
        image: "/gallery-04.png",
        originalCategory: "Smoothies",
      },
      {
        name: "Pineapple Smoothie",
        price: "$8.25",
        description: "Bright pineapple blended for a cool sunny-day drink.",
        image: "/gallery-04.png",
        originalCategory: "Smoothies",
      },
      {
        name: "Passion Fruit Smoothie",
        price: "$8.25",
        description: "Tangy and vibrant with lush tropical depth.",
        image: "/gallery-04.png",
        originalCategory: "Smoothies",
      },
      {
        name: "Passion Fruit Refresher",
        price: "$8.00",
        description: "One of the house favorites for an easy afternoon reset.",
        image: "/gallery-04.png",
        originalCategory: "Fruit Refreshers",
      },
      {
        name: "Mango Refresher",
        price: "$8.00",
        description: "Juicy, bright, and made for downtown wandering.",
        image: "/gallery-04.png",
        originalCategory: "Fruit Refreshers",
      },
    ],
  },
  {
    slug: "kitchen",
    title: "Empanadas & Savory Bites",
    description: "Warm, filling favorites rooted in home-style flavor and hospitality.",
    categories: ["Empanadas", "Prayer"],
    items: [
      {
        name: "Chicken",
        price: "$6.25",
        description: "Dominican-style empanada with a little spice to it.",
        image: "/gallery-09.png",
        originalCategory: "Empanadas",
      },
      {
        name: "Beef",
        price: "$6.25",
        description: "Dominican beef empanada baked until golden.",
        image: "/gallery-09.png",
        originalCategory: "Empanadas",
      },
      {
        name: "Cheese and Spinach",
        price: "$6.25",
        description: "Dominican-style empanada with creamy filling.",
        image: "/gallery-07.png",
        originalCategory: "Empanadas",
      },
      {
        name: "Beef & Cheese Arepa",
        price: "$9.95",
        description: "A savory café staple with melty cheese and seasoned beef.",
        image: "/gallery-09.png",
        originalCategory: "Empanadas",
      },
      {
        name: "Ham & Cheese Danish",
        price: "$6.50",
        description: "Savory, buttery, and a frequent customer favorite.",
        image: "/gallery-07.png",
        originalCategory: "Empanadas",
      },
      {
        name: "Prayer Card",
        price: "Complimentary",
        description: "A small gesture of care and reflection, offered with warmth.",
        image: "/hero3.png",
        originalCategory: "Prayer",
      },
    ],
  },
  {
    slug: "sweet-finish",
    title: "Pastries, Desserts & Takeaway",
    description: "From baked treats to quick extras, this is the soft landing at the end of the menu.",
    categories: ["Desserts", "Pastries", "Bottled and Can Drinks", "Gift Cards"],
    items: [
      {
        name: "Pastel de Nata",
        price: "$3.90",
        description: "Custard tart with a flaky, buttery shell.",
        image: "/gallery-01.png",
        originalCategory: "Pastries",
      },
      {
        name: "Plain Croissant",
        price: "$4.50",
        description: "Classic, crisp, and ideal with coffee.",
        image: "/gallery-03.png",
        originalCategory: "Pastries",
      },
      {
        name: "Seasonal Muffin",
        price: "$4.75",
        description: "Fresh-baked and warmly spiced with a tender crumb.",
        image: "/gallery-03.png",
        originalCategory: "Pastries",
      },
      {
        name: "Flan",
        price: "$8.00",
        description: "Silky and caramel-topped for a classic finish.",
        image: "/gallery-06.png",
        originalCategory: "Desserts",
      },
      {
        name: "Tiramisu",
        price: "$8.00",
        description: "Creamy dessert with espresso warmth.",
        image: "/gallery-06.png",
        originalCategory: "Desserts",
      },
      {
        name: "Bottled & Can Drinks",
        price: "From $3.50",
        description: "Rotating grab-and-go coolers for an easy add-on.",
        image: "/gallery-12.png",
        originalCategory: "Bottled and Can Drinks",
      },
      {
        name: "Gift Card",
        price: "Custom amount",
        description: "A simple way to share coffee, culture, and comfort.",
        image: "/hero2.png",
        originalCategory: "Gift Cards",
      },
    ],
  },
] as const;

export const MENU_SEARCH_HINTS = [
  "empanada",
  "matcha",
  "ube",
  "tiramisu",
  "passion fruit",
  "croissant",
] as const;

export const CATERING_FEATURES = [
  "Empanada assortments, arepas, and pastry trays made for office drops or evening celebrations.",
  "Coffee, matcha, bubble tea, and juice service that can be tailored to the mood of the event.",
  "Plant-based friendly options and thoughtful hospitality built into every order.",
] as const;

export const EVENT_TYPES = [
  "Creative studio breakfasts",
  "Office meetings and team lunches",
  "Birthdays, showers, and family gatherings",
  "Community events, church groups, and neighborhood pop-ins",
] as const;

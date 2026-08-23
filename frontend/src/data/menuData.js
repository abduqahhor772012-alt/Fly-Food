export const CATEGORIES = [
  { id: 'all', name: 'Barchasi' },
  { id: 'lavash', name: 'Lavashlar' },
  { id: 'burger', name: 'Burgerlar' },
  { id: 'pizza', name: 'Pitssalar' },
  { id: 'sandwich', name: 'Sandvichlar' },
  { id: 'drinks', name: 'Ichimliklar' },
  { id: 'desserts', name: 'Shirinliklar' }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Fly Lavash Mega Kombo",
    subtitle: "Juicy mol go'shti, qarsillama kartoshka fri va muzdek Cola!",
    tag: "Aksiya 25% chegirma",
    price: "42,000 UZS",
    oldPrice: "56,000 UZS",
    bgColor: "from-[#0c6a7f]/95 via-[#084d5d]/90 to-[#052c36]/95",
    image: ""
          
  },
  {
    id: 2,
    title: "Double Smash Burger Special",
    subtitle: "2x Mol kotleti, erigan Cheddar pishlog'i va maxsus sous",
    tag: "Eng ko'p sotilgan",
    price: "45,000 UZS",
    oldPrice: "52,000 UZS",
    bgColor: "from-[#0e829b]/95 via-[#0c6a7f]/90 to-[#063a46]/95",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Pepperoni & Cheese Pizza",
    subtitle: "Yupqa xamir, tots pishloq va achchiq pepperoni kolbasasi",
    tag: "Issiq holda yetkazish",
    price: "68,000 UZS",
    oldPrice: "78,000 UZS",
    bgColor: "from-[#075363]/95 via-[#0c6a7f]/90 to-[#0a4654]/95",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop"
  }
];

export const MENU_ITEMS = [
  // Lavashlar
  {
    id: 1,
    name: "Fly Lavash Mol Go'shti",
    category: "lavash",
    price: 32000,
    rating: 4.9,
    prepTime: "12-15 min",
    badge: "Hit",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&auto=format&fit=crop",
    description: "Sershira mol go'shti, yangi pomidor, bodring, chipslar va sarmsoqli maxsus sous."
  },
  {
    id: 2,
    name: "Fly Lavash Tovuqli Pishloqli",
    category: "lavash",
    price: 30000,
    rating: 4.8,
    prepTime: "10-15 min",
    badge: "Ommabop",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&auto=format&fit=crop",
    description: "Tovuq go'shti, erigan Motsarella pishlog'i va pomidorli maxsus sous."
  },
  {
    id: 3,
    name: "Mini Lavash Klassik",
    category: "lavash",
    price: 24000,
    rating: 4.7,
    prepTime: "10 min",
    badge: "",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&auto=format&fit=crop",
    description: "Yengil va mazali mini lavash, pomidor va bodring bilan."
  },

  // Burgerlar
  {
    id: 4,
    name: "Double Smash Burger",
    category: "burger",
    price: 45000,
    rating: 4.9,
    prepTime: "15 min",
    badge: "Hit",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop",
    description: "2x Mol kotleti, Cheddar pishlog'i, karamelizatsiyalangan piyoz va fly burger sous."
  },
  {
    id: 5,
    name: "Crispy Chicken Burger",
    category: "burger",
    price: 35000,
    rating: 4.8,
    prepTime: "12 min",
    badge: "Yangi",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=600&auto=format&fit=crop",
    description: "Qarsillama tovuq fileni, karam salati va achchiq-chuchuk sous."
  },
  {
    id: 6,
    name: "Cheeseburger Classic",
    category: "burger",
    price: 32000,
    rating: 4.6,
    prepTime: "10 min",
    badge: "",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop",
    description: "Klassik mol kotleti, cheddar pishloq, marinlangan bodring va ketchup."
  },

  // Pitssalar
  {
    id: 7,
    name: "Pepperoni Pitssa (30sm)",
    category: "pizza",
    price: 68000,
    rating: 4.9,
    prepTime: "20 min",
    badge: "Hit",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop",
    description: "Motsarella pishlog'i va pishloqli pepperoni kolbasasi."
  },
  {
    id: 8,
    name: "Margarita Pitssa (30sm)",
    category: "pizza",
    price: 58000,
    rating: 4.7,
    prepTime: "18 min",
    badge: "Klassik",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop",
    description: "Nafis pomidor sousi, ko'p motsarella pishlog'i va reyhan barglari."
  },

  // Sandvichlar
  {
    id: 9,
    name: "Club Sandwich Go'shtli",
    category: "sandwich",
    price: 36000,
    rating: 4.8,
    prepTime: "15 min",
    badge: "Mashhur",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop",
    description: "Tost non, go'shtli vetchina, pishloq, tuxum va yangi sabzavotlar."
  },
  {
    id: 10,
    name: "Tovuqli Club Sandwich",
    category: "sandwich",
    price: 34000,
    rating: 4.7,
    prepTime: "14 min",
    badge: "",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop",
    description: "Duxovkada pishgan tovuq fileni, pomidor, pishloq va sous."
  },

  // Ichimliklar
  {
    id: 11,
    name: "Coca-Cola 0.5L",
    category: "drinks",
    price: 9000,
    rating: 5.0,
    prepTime: "2 min",
    badge: "",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop",
    description: "Muzdek salqin Coca-Cola 0.5 litr."
  },
  {
    id: 12,
    name: "Fanta Orange 0.5L",
    category: "drinks",
    price: 9000,
    rating: 4.9,
    prepTime: "2 min",
    badge: "",
    image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=600&auto=format&fit=crop",
    description: "Apelsin ta'mli muzdek Fanta."
  },

  // Shirinliklar
  {
    id: 13,
    name: "Shokoladli Donat",
    category: "desserts",
    price: 15000,
    rating: 4.8,
    prepTime: "3 min",
    badge: "Shirin",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop",
    description: "Nafis shokolad glazura va izing bilan qoplangan donat."
  }
];

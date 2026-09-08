export const CATEGORIES = [
  { id: 'all', name: { UZ: 'Barchasi', RU: 'Все', EN: 'All' } },
  { id: 'lavash', name: { UZ: 'Lavashlar', RU: 'Лаваши', EN: 'Lavash' } },
  { id: 'burger', name: { UZ: 'Burgerlar', RU: 'Бургеры', EN: 'Burgers' } },
  { id: 'pizza', name: { UZ: 'Pitssalar', RU: 'Пиццы', EN: 'Pizza' } },
  { id: 'sandwich', name: { UZ: 'Sandvichlar', RU: 'Сэндвичи', EN: 'Sandwiches' } },
  { id: 'drinks', name: { UZ: 'Ichimliklar', RU: 'Напитки', EN: 'Drinks' } },
  { id: 'desserts', name: { UZ: 'Shirinliklar', RU: 'Десерты', EN: 'Desserts' } }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: {
      UZ: "Fly Lavash Mega Kombo",
      RU: "Fly Лаваш Мега Комбо",
      EN: "Fly Lavash Mega Combo"
    },
    subtitle: {
      UZ: "Juicy mol go'shti, qarsillama kartoshka fri va muzdek Cola!",
      RU: "Сочная говядина, хрустящий картофель фри и ледяная Cola!",
      EN: "Juicy beef, crispy French fries and ice-cold Cola!"
    },
    tag: {
      UZ: "Aksiya 25% chegirma",
      RU: "Акция 25% скидка",
      EN: "25% Off Promo"
    },
    price: "42,000 UZS",
    oldPrice: "56,000 UZS",
    bgColor: "from-[#0c6a7f]/95 via-[#084d5d]/90 to-[#052c36]/95",
    image: "https://i.postimg.cc/W3GpbtHv/Chat-GPT-Image-24-mar-2026-g-17-15-05-artguru.png"
  },
  {
    id: 2,
    title: {
      UZ: "Double Smash Burger Special",
      RU: "Double Smash Burger Special",
      EN: "Double Smash Burger Special"
    },
    subtitle: {
      UZ: "2x Mol kotleti, erigan Cheddar pishlog'i va maxsus sous",
      RU: "2 котлеты из говядины, сыр Чеддер и фирменный соус",
      EN: "2x Beef patties, melted Cheddar cheese and special sauce"
    },
    tag: {
      UZ: "Eng ko'p sotilgan",
      RU: "Хит продаж",
      EN: "Best Seller"
    },
    price: "45,000 UZS",
    oldPrice: "52,000 UZS",
    bgColor: "from-[#0e829b]/95 via-[#0c6a7f]/90 to-[#063a46]/95",
    image: "https://i.postimg.cc/0N1L5ZR1/Chat-GPT-Image-24-mar-2026-g-16-13-40-artguru.png"
  },
  {
    id: 3,
    title: {
      UZ: "Pepperoni & Cheese Pizza",
      RU: "Пепперони и Сырная Пицца",
      EN: "Pepperoni & Cheese Pizza"
    },
    subtitle: {
      UZ: "Yupqa xamir, tots pishloq va achchiq pepperoni kolbasasi",
      RU: "Тонкое тесто, тянущийся сыр и пикантная пепперони",
      EN: "Thin crust, stretchy cheese and spicy pepperoni"
    },
    tag: {
      UZ: "Issiq holda yetkazish",
      RU: "Горячая доставка",
      EN: "Hot Delivery"
    },
    price: "68,000 UZS",
    oldPrice: "78,000 UZS",
    bgColor: "from-[#075363]/95 via-[#0c6a7f]/90 to-[#0a4654]/95",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
  }
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: { UZ: "Gamburger set", RU: "Гамбургер сет", EN: "Hamburger Set" },
    category: "burger",
    price: 75000,
    rating: 4.9,
    Vazn: "500 gr",
    image: "https://i.postimg.cc/L43FJtCJ/333.png",
    description: {
      UZ: "burger, fri, naggets, trayfl, salat kichik, pepsi 0.5, sous",
      RU: "бургер, фри, наггетсы, трайфл, малый салат, пепси 0.5, соус",
      EN: "burger, fries, nuggets, trifle, small salad, pepsi 0.5, sauce"
    }
  },
  {
    id: 2,
    name: { UZ: "Fri", RU: "Картофель фри", EN: "French Fries" },
    category: "sandwich",
    price: 20000,
    rating: 4.8,
    Vazn: "120 gr",
    image: "https://i.postimg.cc/fb6kRGW3/Chat-GPT-Image-24-mar-2026-g-18-02-06-artguru.png",
    description: {
      UZ: "Qovurilgan oltinrang kartoshka",
      RU: "Обжаренный золотистый картофель",
      EN: "Crispy golden fried potatoes"
    }
  },
  {
    id: 3,
    name: { UZ: "Bayts", RU: "Байтсы", EN: "Chicken Bites" },
    category: "sandwich",
    price: 30000,
    rating: 4.7,
    Vazn: "10 dona",
    image: "https://i.postimg.cc/FzxKG1yb/hotwings-3pcs.png",
    description: {
      UZ: "Qarsillama qovurilgan tovuq filesi",
      RU: "Хрустящее обжаренное куриное филе",
      EN: "Crispy fried chicken bites"
    }
  },
  {
    id: 4,
    name: { UZ: "Strips", RU: "Стрипсы", EN: "Chicken Strips" },
    category: "sandwich",
    price: 38000,
    rating: 4.9,
    Vazn: "8 dona",
    image: "https://i.postimg.cc/8Pt56Jkw/100060634026b0-artguru.png",
    description: {
      UZ: "Shirin va qarsillama tovuq stripslari",
      RU: "Сочные и хрустящие куриные стрипсы",
      EN: "Juicy and crispy chicken strips"
    }
  },
  {
    id: 5,
    name: { UZ: "Kokletli box", RU: "Котлет Бокс", EN: "Patties Box" },
    category: "burger",
    price: 46000,
    rating: 4.8,
    Vazn: "400 gr",
    image: "https://allwebs.ru/images/2026/09/01/6106d5748a7a88c2ad959dd1ae697b06.png",
    description: {
      UZ: "Kotlet, fri, sous, chili, balgarskiy svetafor, mayonez",
      RU: "Котлета, фри, соус, чили, болгарский перец, майонез",
      EN: "Patty, fries, sauce, chili, bell pepper, mayonnaise"
    }
  },
  {
    id: 6,
    name: { UZ: "Bolajon set", RU: "Детский сет", EN: "Kids Set" },
    category: "burger",
    price: 50000,
    rating: 4.6,
    Vazn: "240 gr",
    image: "https://i.postimg.cc/hG7P628q/Chat-GPT-Image-24-mar-2026-g-17-23-26.png",
    description: {
      UZ: "Longer, fri, sok kichik",
      RU: "Лонгер, фри, маленький сок",
      EN: "Longer, fries, small juice"
    }
  },
  {
    id: 7,
    name: { UZ: "Shaurma set", RU: "Шаурма сет", EN: "Shawarma Set" },
    category: "lavash",
    price: 80000,
    rating: 4.9,
    Vazn: "600 gr",
    image: "https://i.postimg.cc/mDf2s7VM/Chat-GPT-Image-24-mar-2026-g-17-17-45-artguru.png",
    description: {
      UZ: "Shaurma, fri, naggets, trayfl, salat kichik, pepsi 0.5, sous",
      RU: "шаурма, фри, наггетсы, трайфл, малый салат, пепси 0.5, соус",
      EN: "shawarma, fries, nuggets, trifle, small salad, pepsi 0.5, sauce"
    }
  },
  {
    id: 8,
    name: { UZ: "Lavash set", RU: "Лаваш сет", EN: "Lavash Set" },
    category: "lavash",
    price: 90000,
    rating: 4.7,
    Vazn: "700 gr",
    image: "https://i.postimg.cc/W3GpbtHv/Chat-GPT-Image-24-mar-2026-g-17-15-05-artguru.png",
    description: {
      UZ: "Lavash, fri, naggets, trayfl, salat kichik, pepsi 0.5, sous",
      RU: "лаваш, фри, наггетсы, трайфл, малый салат, пепси 0.5, соус",
      EN: "lavash, fries, nuggets, trifle, small salad, pepsi 0.5, sauce"
    }
  },
  {
    id: 9,
    name: { UZ: "Chikenburger set", RU: "Чикенбургер сет", EN: "Chicken Burger Set" },
    category: "burger",
    price: 70000,
    rating: 4.8,
    Vazn: "500 gr",
    image: "https://i.postimg.cc/2yTzhMYW/Chat-GPT-Image-24-mar-2026-g-17-11-26-artguru.png",
    description: {
      UZ: "Chikenburger, fri, naggets, trayfl, salat kichik, pepsi 0.5, sous",
      RU: "чикенбургер, фри, наггетсы, трайфл, малый салат, пепси 0.5, соус",
      EN: "chicken burger, fries, nuggets, trifle, small salad, pepsi 0.5, sauce"
    }
  },
  {
    id: 10,
    name: { UZ: "Longer set", RU: "Лонгер сет", EN: "Longer Set" },
    category: "sandwich",
    price: 68000,
    rating: 4.7,
    Vazn: "500 gr",
    image: "https://i.postimg.cc/pXXVRWQm/Chat-GPT-Image-24-mar-2026-g-17-08-27-artguru.png",
    description: {
      UZ: "Longer, fri, naggets, trayfl, salat kichik, pepsi 0.5, sous",
      RU: "лонгер, фри, наггетсы, трайфл, малый салат, пепси 0.5, соус",
      EN: "longer, fries, nuggets, trifle, small salad, pepsi 0.5, sauce"
    }
  },
  {
    id: 11,
    name: { UZ: "Kokletli box Special", RU: "Котлет Бокс Спешл", EN: "Patties Box Special" },
    category: "burger",
    price: 46000,
    rating: 5.0,
    Vazn: "400 gr",
    image: "https://i.postimg.cc/L6C9scNH/Chat-GPT-Image-24-mar-2026-g-16-29-46-artguru.png",
    description: {
      UZ: "Kotlet, fri, sous, chili, balgarskiy svetafor, mayonez",
      RU: "Котлета, фри, соус, чили, болгарский перец, майонез",
      EN: "Patty, fries, sauce, chili, bell pepper, mayonnaise"
    }
  },
  {
    id: 12,
    name: { UZ: "Fly Lavash", RU: "Fly Лаваш", EN: "Fly Lavash" },
    category: "lavash",
    price: 54000,
    rating: 4.9,
    Vazn: "300 gr, 35 sm",
    image: "https://i.postimg.cc/mDBfjj8q/Chat-GPT-Image-24-mar-2026-g-16-23-31-artguru.png",
    description: {
      UZ: "Kotlet, strips, mol go'shti, maxsus sous, mayonez, pomidor",
      RU: "Котлета, стрипсы, говядина, фирменный соус, майонез, помидор",
      EN: "Patty, strips, beef, special sauce, mayo, tomato"
    }
  },
  {
    id: 13,
    name: { UZ: "Xaggi", RU: "Хагги", EN: "Haggee" },
    category: "sandwich",
    price: 45000,
    rating: 4.8,
    Vazn: "300 gr, 30 sm",
    image: "https://i.postimg.cc/LXDdbPW4/Chat-GPT-Image-24-mar-2026-g-16-21-56-artguru.png",
    description: {
      UZ: "Bagget non, mol go'shti, maxsus sous, mayonez, pomidor, bodring, qizil piyoz, sir",
      RU: "Багет, говядина, фирменный соус, майонез, помидоры, огурцы, красный лук, сыр",
      EN: "Baguette bread, beef, special sauce, mayo, tomato, cucumber, red onion, cheese"
    }
  },
  {
    id: 14,
    name: { UZ: "Shaurma", RU: "Шаурма", EN: "Shawarma" },
    category: "lavash",
    price: 40000,
    rating: 4.8,
    Vazn: "200 gr",
    image: "https://i.postimg.cc/tCfKwpBs/Chat-GPT-Image-24-mar-2026-g-16-17-38-artguru.png",
    description: {
      UZ: "Mol go'shti, maxsus sous, mayonez, pomidor, fri, qizil piyoz",
      RU: "Говядина, фирменный соус, майонез, помидоры, фри, красный лук",
      EN: "Beef, special sauce, mayo, tomato, fries, red onion"
    }
  },
  {
    id: 15,
    name: { UZ: "Chizburger", RU: "Чизбургер", EN: "Cheeseburger" },
    category: "burger",
    price: 35000,
    rating: 4.8,
    Vazn: "200 gr",
    image: "https://i.postimg.cc/0N1L5ZR1/Chat-GPT-Image-24-mar-2026-g-16-13-40-artguru.png",
    description: {
      UZ: "Mol go'shtidan kotlet, maxsus sous, pomidor, qizil piyoz, sir, aysberg",
      RU: "Котлета из говядины, соус, помидор, красный лук, сыр, айсберг",
      EN: "Beef patty, special sauce, tomato, red onion, cheese, iceberg lettuce"
    }
  },
  {
    id: 16,
    name: { UZ: "Burger Klasik", RU: "Бургер Классик", EN: "Classic Burger" },
    category: "burger",
    price: 33000,
    rating: 4.8,
    Vazn: "150 gr",
    image: "https://i.postimg.cc/zB0Mjry9/Chat-GPT-Image-24-mar-2026-g-16-12-38-artguru.png",
    description: {
      UZ: "Mol go'shtidan kotlet, maxsus sous, pomidor, qizil piyoz, aysberg",
      RU: "Котлета из говядины, соус, помидор, красный лук, айсберг",
      EN: "Beef patty, special sauce, tomato, red onion, iceberg lettuce"
    }
  },
  {
    id: 17,
    name: { UZ: "Xot dog ikra", RU: "Хот-дог с икрой", EN: "Caviar Hot Dog" },
    category: "sandwich",
    price: 20000,
    rating: 4.8,
    Vazn: "150 gr",
    image: "https://i.postimg.cc/90kn6YYc/Chat-GPT-Image-24-mar-2026-g-16-11-15-artguru.png",
    description: {
      UZ: "Big sosiska, maxsus sous, pomidor, bodring, ikra",
      RU: "Большая сосиска, фирменный соус, помидор, огурец, икра",
      EN: "Big sausage, special sauce, tomato, cucumber, caviar"
    }
  },
  {
    id: 18,
    name: { UZ: "Chiken burger", RU: "Чикен бургер", EN: "Chicken Burger" },
    category: "burger",
    price: 33000,
    rating: 4.8,
    Vazn: "150 gr",
    image: "https://i.postimg.cc/vT4Pt6FL/fried-chicken-burger-isolated-on-transparent-background-file-cut.png",
    description: {
      UZ: "Tovuq go'shtidan kotlet, maxsus sous, pomidor, qizil piyoz, aysberg",
      RU: "Куриная котлета, соус, помидор, красный лук, айсберг",
      EN: "Chicken patty, special sauce, tomato, red onion, iceberg lettuce"
    }
  },
  {
    id: 19,
    name: { UZ: "Donar dog", RU: "Донар дог", EN: "Donar Dog" },
    category: "sandwich",
    price: 19000,
    rating: 4.8,
    Vazn: "150 gr",
    image: "https://i.postimg.cc/kg3jW4jy/Chat-GPT-Image-24-mar-2026-g-16-08-16-artguru.png",
    description: {
      UZ: "Mol go'shti, maxsus sous, mayonez",
      RU: "Говядина, фирменный соус, майонез",
      EN: "Beef, special sauce, mayo"
    }
  },
  {
    id: 20,
    name: { UZ: "Chiz dog", RU: "Чиз дог", EN: "Cheese Dog" },
    category: "sandwich",
    price: 25000,
    rating: 4.8,
    Vazn: "150 gr",
    image: "https://i.postimg.cc/C11JwfKc/Chat-GPT-Image-24-mar-2026-g-16-06-04-artguru.png",
    description: {
      UZ: "Big sosiska, maxsus sous, tuzlangan bodring, indeyka, aysberg, pomidor",
      RU: "Сосиска, фирменный соус, соленые огурцы, индейка, айсберг, помидор",
      EN: "Big sausage, special sauce, pickles, turkey, iceberg, tomato"
    }
  },
  {
    id: 21,
    name: { UZ: "Longer", RU: "Лонгер", EN: "Longer" },
    category: "sandwich",
    price: 28000,
    rating: 4.8,
    Vazn: "150 gr",
    image: "https://i.postimg.cc/26KGy8by/eating-poultry-could-be-shortening-our-lives-although-not-as-much.png",
    description: {
      UZ: "Tovuq go'shtidan strips, maxsus sous, tuzlangan bodring, aysberg",
      RU: "Куриные стрипсы, фирменный соус, соленые огурцы, айсберг",
      EN: "Chicken strips, special sauce, pickles, iceberg lettuce"
    }
  },
  {
    id: 22,
    name: { UZ: "Naggets", RU: "Наггетсы", EN: "Chicken Nuggets" },
    category: "sandwich",
    price: 30000,
    rating: 4.8,
    Vazn: "10 dona",
    image: "https://i.postimg.cc/dQzMSJHG/naggetsy1-1320x969-artguru.png",
    description: {
      UZ: "Qovurilgan achchiq tovuq filesi",
      RU: "Обжаренное остренькое куриное филе",
      EN: "Crispy spicy chicken nuggets"
    }
  },
  {
    id: 23,
    name: { UZ: "Shaurma Klasik", RU: "Шаурма Классик", EN: "Classic Shawarma" },
    category: "lavash",
    price: 40000,
    rating: 4.8,
    Vazn: "200 gr",
    image: "https://i.postimg.cc/s2fbZxXY/fly-food.png",
    description: {
      UZ: "Mol go'shti, maxsus sous, mayonez, pomidor, fri, qizil piyoz",
      RU: "Говядина, фирменный соус, майонез, помидоры, фри, красный лук",
      EN: "Beef, special sauce, mayo, tomato, fries, red onion"
    }
  },
  {
    id: 24,
    name: { UZ: "Klab sendvich", RU: "Клаб сэндвич", EN: "Club Sandwich" },
    category: "sandwich",
    price: 44000,
    rating: 4.8,
    Vazn: "250 gr",
    image: "https://i.postimg.cc/xdshGQNS/fly-food.png",
    description: {
      UZ: "Tovuq go'shtidan file, maxsus sous, bodring, pomidor, aysberg, sir, fri",
      RU: "Куриное филе, соус, огурец, помидор, айсберг, сыр, фри",
      EN: "Chicken fillet, special sauce, cucumber, tomato, iceberg, cheese, fries"
    }
  },
  {
    id: 25,
    name: { UZ: "Uchar donar blyuda", RU: "Учар донар блюдо", EN: "Flying Donar Platter" },
    category: "lavash",
    price: 60000,
    rating: 4.8,
    Vazn: "600 gr",
    image: "https://i.postimg.cc/J0VjF13k/IMG-2745.png",
    description: {
      UZ: "Mol go'shti, tovuq koleks, fri, salat qizil karam, maxsus sous, pita non",
      RU: "Говядина, курица, фри, салат из красной капусты, соус, пита",
      EN: "Beef, chicken mix, fries, red cabbage salad, special sauce, pita"
    }
  },
  {
    id: 26,
    name: { UZ: "Big Burger", RU: "Биг Бургер", EN: "Big Burger" },
    category: "burger",
    price: 44000,
    rating: 4.8,
    Vazn: "250 gr",
    image: "https://i.postimg.cc/T2gVDDGB/IMG-2746.png",
    description: {
      UZ: "Mol go'shtidan kotlet 2 xissa, maxsus sous, pomidor, qizil piyoz",
      RU: "2 котлеты из говядины, соус, помидоры, красный лук",
      EN: "Double beef patty, special sauce, tomatoes, red onion"
    }
  },
  {
    id: 27,
    name: { UZ: "Ice Tea", RU: "Айс Ти", EN: "Ice Tea" },
    category: "drinks",
    price: 25000,
    rating: 4.8,
    Vazn: "500 ml",
    image: "https://i.postimg.cc/7LjzCxRy/IMG-2749.png",
    description: {
      UZ: "Limon, apelsin, muz, yalpiz, maxsus sirop",
      RU: "Лимон, апельсин, лёд, мята, фирменный сироп",
      EN: "Lemon, orange, ice, mint, special syrup"
    }
  },
  {
    id: 28,
    name: { UZ: "Lavash katta", RU: "Лаваш большой", EN: "Large Lavash" },
    category: "lavash",
    price: 40000,
    rating: 4.8,
    Vazn: "200 gr",
    image: "https://i.postimg.cc/vTmRFBR5/Chat-GPT-Image-24-mar-2026-g-16-18-40-artguru.png",
    description: {
      UZ: "Mol go'shti, maxsus sous, mayonez, pomidor, bodring, fri",
      RU: "Говядина, фирменный соус, майонез, помидоры, огурцы, фри",
      EN: "Beef, special sauce, mayo, tomato, cucumber, fries"
    }
  },
  {
    id: 29,
    name: { UZ: "Tarxun", RU: "Тархун", EN: "Tarragon Drink" },
    category: "drinks",
    price: 20000,
    rating: 4.8,
    Vazn: "500 ml",
    image: "https://i.postimg.cc/GhjvMn4G/IMG-2748.png",
    description: {
      UZ: "Limon, apelsin, muz, yalpiz, maxsus tarxun siropi",
      RU: "Лимон, апельсин, лёд, мята, сироп тархуна",
      EN: "Lemon, orange, ice, mint, tarragon syrup"
    }
  },
  {
    id: 30,
    name: { UZ: "Margarita Pitssa", RU: "Маргарита Пицца", EN: "Margherita Pizza" },
    category: "pizza",
    price: 60000,
    rating: 4.8,
    Vazn: "550 gr",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    description: {
      UZ: "Motsarella pishlog'i, pomidor va maxsus italyancha sous",
      RU: "Сыр моцарелла, томаты и фирменный итальянский соус",
      EN: "Mozzarella cheese, tomatoes and authentic Italian sauce"
    }
  },
  {
    id: 31,
    name: { UZ: "Trayfl", RU: "Трайфл", EN: "Trifle Dessert" },
    category: "desserts",
    price: 18000,
    rating: 4.8,
    Vazn: "100 gr",
    image: "https://i.postimg.cc/mDV53Rd8/IMG-2747.png",
    description: {
      UZ: "Maxsus krem, shokolad va yangi biskvit",
      RU: "Фирменный крем, шоколад и свежий бисквит",
      EN: "Special cream, chocolate and fresh sponge cake"
    }
  },
  {
    id: 32,
    name: { UZ: "Pepperoni Pitssa", RU: "Пепперони Пицца", EN: "Pepperoni Pizza" },
    category: "pizza",
    price: 68000,
    rating: 4.9,
    Vazn: "600 gr",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
    description: {
      UZ: "Pepperoni kolbasasi, motsarella pishlog'i, tomat sousi",
      RU: "Колбаса пепперони, сыр моцарелла, томатный соус",
      EN: "Pepperoni sausage, mozzarella cheese, tomato sauce"
    }
  }
];

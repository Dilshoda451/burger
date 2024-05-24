const fastFoodData = [
  [
    {
      name: "Lavash oddiy",
      ingredients:
        "Mol go'shti 60g, Ketchup, mayonez, sous, pomidor va bodring",
      prise: 20000,
      photoName: "././pictures/lavash/лаваш оддий.jpg",
    },
    {
      name: "Lavash sirli",
      ingredients:
        "Mol go'shti 80g, ketchup, mayonez, sous, pomidor, bodring, sir va salat barg ",
      prise: 26000,
      photoName: "././pictures/lavash/лаваш сырный.jpg",
    },
    {
      name: "Lavash zakaznoy",
      ingredients:
        "Mol go'shti 100g, Ketchup, mayonez, sous, pomidor, bodring, sir va salat barg",
      prise: 30000,
      photoName: "././pictures/lavash/лаваш заказной.jpg",
      soldOut: false,
    },
    {
      name: "Lavash qo'ziqorinli",
      ingredients:
        "Mol go'shti 100g, Ketchup, mayonez, sous, pomidor, bodring, sir va salat barg",
      prise: 30000,
      photoName: "././pictures/lavash/лаваш с грибами.jpg",
      soldOut: false,
    },
    {
      name: "Lavash ostriy",
      ingredients:
        "Mol go'shti 100g, Ketchup, mayonez, sous, pomidor, bodring, sir va salat barg",
      prise: 30000,
      photoName: "././pictures/lavash/лаваш острый.png",
      soldOut: false,
    },
    {
      name: "Lavash tovuq go'shtli",
      ingredients:
        "Tovuq go'sht 100g, Ketchup, mayonez, sous, pomidor, bodring, sir va salat barg",
      prise: 30000,
      photoName: "././pictures/lavash/лаваш с курицей.jpg",
      soldOut: false,
    },
  ],
  [
    {
      name: "Pitsa assorti",
      ingredients:
        "Mol go'shti 80g, salat barg, chips, pomidor, bodring, tomat sousi, ketchup va mayonez, sir",
      prise: 75000,
      photoName: "././pictures/pizza/пицца ассорти.jpg",
    },
    {
      name: "Pitsa Margarita",
      ingredients:
        "Sir, mol go'shti 80g, salat barg, chips, pomidor, bodring, tomat sousi,  ketchup va mayonez",
      prise: 70000,
      photoName: "././pictures/pizza/пицца маргарита.jpg",
    },
    {
      name: "Pitsa Pepperoni",
      ingredients:
        "Sir, mol go'shti 80g, salat barg, chips, pomidor, bodring, tomat sousi,  ketchup va mayonez",
      prise: 65000,
      photoName: "././pictures/pizza/пицца пепперони.jpg",
    },
    {
      name: "Pitsa Calzone",
      ingredients:
        "Sir, mol go'shti 80g, salat barg, chips, pomidor, bodring, tomat sousi,  ketchup va mayonez",
      prise: 70000,
      photoName: "././pictures/pizza/пицца кальцоне.jpg",
    },
    {
      name: "Pitsa Ananasli",
      ingredients:
        "Sir, mol go'shti 80g, salat barg, chips, pomidor, bodring, tomat sousi,  ketchup va mayonez",
      prise: 75000,
      photoName: "././pictures/pizza/пицца с ананасами.jpg",
    },
    {
      name: "Pitsa Italiano",
      ingredients:
        "Sir, mol go'shti 80g, salat barg, chips, pomidor, bodring, tomat sousi,  ketchup va mayonez",
      prise: 80000,
      photoName: "././pictures/pizza/пицца итальянская.jpg",
    },
  ],
  [
    {
      name: "Gamburger Klassik",
      ingredients:
        "Mol go'shtili kotlet, sabzi salat, pomidor, bodring, ketchup, mayonez, sirli sous, salat barg va chips",
      prise: 22000,
      photoName: "././pictures/gamburger/гамбургер классический.webp",
    },
    {
      name: "Gamburger Amerikanskiy",
      ingredients:
        "Tovuq go'shtli kotlet, sabzi salat, pomidor, bodring, ketchup, mayonez, sirli sous, salat barg va chips",
      prise: 24000,
      photoName: "././pictures/gamburger/гамбургер американский.jpg",
    },
    {
      name: "Gamburger Dvoynoy",
      ingredients:
        "2x mol go'shtili kotlet, sabzi salat, pomidor, bodring, ketchup, mayonez, sirli sous, salat barg va chips",
      prise: 28000,
      photoName: "././pictures/gamburger/гамбургер двойной.jpg",
    },
    {
      name: "Gamburger Smaylik",
      ingredients:
        "Mol go'shtili kotlet, salat barg, sir, pomidor, bodring, piyoz, ketchup, mayonez, sirli sous va chips ",
      prise: 25000,
      photoName: "././pictures/gamburger/гамбургер смайлик.jpg",
    },
    {
      name: "Chizburger",
      ingredients:
        "Mol go'shtili kotlet, pishloq, sabzi salat, pomidor, bodring, ketchup, mayonez, sirli sous, salat barg va chips",
      prise: 26000,
      photoName: "././pictures/gamburger/чизбургер.jpg",
    },
  ],
  [
    {
      name: "Hot Dog Klassicheskiy",
      ingredients:
        "2 x To'htaniyoz sosiska, sabzi salat, salat barg, pomidor, bodring, sirli sous, chips, ketchup va mayonez",
      prise: 12000,
      photoName: "././pictures/hot-dog/хот дог классический.jpg",
    },
    {
      name: "Hot Dog Amerikanskiy",
      ingredients:
        "2 x sosiska, sabzi salat, salat barg, pomidor, bodring, sirli sous, chips, ketchup va mayonez",
      prise: 15000,
      photoName: "././pictures/hot-dog/хот дог американский.jpg",
    },
    {
      name: "Hot Dog Datskiy",
      ingredients:
        "2 x sosiska, sabzi salat, salat barg, pomidor, bodring, sirli sous, chips, ketchup va mayonez",
      prise: 18000,
      photoName: "././pictures/hot-dog/хот дог датский.jpeg",
    },
    {
      name: "Hot Dog Kanadskiy",
      ingredients:
        "2 x kanadskaya sosiska, motsarella, sabzi salat, salat barg, pomidor, bodring, sirli sous, chips, ketchup va mayonez",
      prise: 16000,
      photoName: "././pictures/hot-dog/хот дог канадский.jpg",
    },
    {
      name: "Hot Dog Boyarskiy",
      ingredients:
        "2 x sosiska, sabzi salat, salat barg, pomidor, bodring, sirli sous, chips, ketchup va mayonez",
      prise: 18000,
      photoName: "././pictures/hot-dog/хот дог боярский.jpg",
    },
  ],
  [
    {
      name: "Coca Cola 1,5L",
      ingredients: "",
      prise: 12000,
      photoName: "././pictures/drinks/cocacola15.png",
    },
    {
      name: "Coca Cola 1L",
      ingredients: "",
      prise: 10000,
      photoName: "././pictures/drinks/cocacola1.png",
    },
    {
      name: "Coca Cola 0,5L",
      ingredients: "",
      prise: 6000,
      photoName: "././pictures/drinks/cocacola05.png",
    },
    {
      name: "Fanta 1,5L",
      ingredients: "",
      prise: 12000,
      photoName: "././pictures/drinks/fanta15.png",
    },
    {
      name: "Fanta 1L",
      ingredients: "",
      prise: 10000,
      photoName: "././pictures/drinks/fanta1.png",
    },
    {
      name: "Fanta 0,5L",
      ingredients: "",
      prise: 6000,
      photoName: "././pictures/drinks/fanta05.png",
    },
    {
      name: "Pepsi 1,5L",
      ingredients: "",
      prise: 12000,
      photoName: "././pictures/drinks/pepsi15.png",
    },
    {
      name: "Pepsi 1L",
      ingredients: "",
      prise: 10000,
      photoName: "././pictures/drinks/pepsi15.png",
    },
    {
      name: "Pepsi 0,5L",
      ingredients: "",
      prise: 6000,
      photoName: "././pictures/drinks/pepsi05.png",
    },
    {
      name: "Flash 0,5L ",
      ingredients: "",
      prise: 10000,
      photoName: "././pictures/drinks/flash05.png",
    },
    {
      name: "Flash 3,3ml ",
      ingredients: "",
      prise: 8000,
      photoName: "././pictures/drinks/flash33.png",
    },
    {
      name: "Flash 250ml ",
      ingredients: "",
      prise: 6000,
      photoName: "././pictures/drinks/flash250.png",
    },
    {
      name: "Gazli suv 1L ",
      ingredients: "",
      prise: 3000,
      photoName: "././pictures/drinks/hydrolife1.png",
    },
    {
      name: "Gazli suv 0.5L ",
      ingredients: "",
      prise: 2000,
      photoName: "././pictures/drinks/hydrolife05.png",
    },
    {
      name: "Oddiy suv 1L ",
      ingredients: "",
      prise: 3000,
      photoName: "././pictures/drinks/silver1.png",
    },
    {
      name: "Oddiy suv 0.5L ",
      ingredients: "",
      prise: 2000,
      photoName: "././pictures/drinks/silver05.png",
    },
  ],
];
//

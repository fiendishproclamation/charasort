dataSetVersion = "2019-08-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Album",
    key: "album",
    tooltip: "Check this to restrict to certain albums.",
    checked: false,
    sub: [
      { name: "Moshi Moshi Harajuku", key: "mmh" },
      { name: "Pamyu Pamyu Revolution", key: "ppr" },
      { name: "Nandacollection", key: "nanda" },
      { name: "Pika Pika Fantajin", key: "ppf" },
      { name: "Japamyu", key: "japamyu" },
      { name: "B-Sides", key: "bsides" },
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Kyary No March",
    img: "c5DqpgX.png",
    opts: {
      album: [ "mmh" ]
    }
  },
  {
    name: "Cherry Bonbon",
    img: "c5DqpgX.png",
    opts: {
      album: [ "mmh" ]
    }
  },
 {
    name: "PONPONPON",
    img: "c5DqpgX.png",
    opts: {
      album: [ "mmh", "ppr" ]
    }
  },
   {
    name: "Choudo Ii No",
    img: "c5DqpgX.png",
    opts: {
      album: [ "mmh" ]
    }
  },
   {
    name: "Pinpon ga Nannai",
    img: "c5DqpgX.png",
    opts: {
      album: [ "mmh" ]
    }
  },
   {
    name: "Jelly",
    img: "c5DqpgX.png",
    opts: {
      album: [ "mmh" ]
    }
  },
   {
    name: "Pamyu Pamyu Revolution",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppr" ]
    }
  },
  {
    name: "Tsukema Tsukeru",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppr" ]
    }
  },
  {
    name: "Minna No Uta",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppr" ]
    }
  },
  {
    name: "Kyary-ANAN",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppr" ]
    }
  },
  {
    name: "CANDY CANDY",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppr" ]
    }
  },
  {
    name: "Drinker",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppr" ]
    }
  },
  {
    name: "Onedari 44*C",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppr" ]
    }
  },
  {
    name: "Suki Sugite Kiresou",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppr" ]
    }
  },
 {
    name: "Giri Giri Safe",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppr" ]
    }
  },
 {
    name: "Oyasumi",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppr" ]
    }
  },
{
    name: "Chan Chaka Chan Chan",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppr" ]
    }
  },
  {
    name: "Nanda Collection",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
   {
    name: "Ninja Re Bang Bang",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
   {
    name: "Kimi Ni 100 Percent",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
   {
    name: "Super Scooter Happy",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
  {
    name: "Invader Invader",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
 {
    name: "Mi",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
  {
    name: "Fashion Monster",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
  {
    name: "Saigo No Icecream",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
  {
    name: "Noriko to Norio",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
  {
    name: "Furisodation",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
  {
    name: "Kura Kura",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
  {
    name: "Otono na Kodomo",
    img: "c5DqpgX.png",
    opts: {
      album: [ "nanda" ]
    }
  },
  {
    name: "Pika Pika Fantajin",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "Kira Kira Killer",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "Yume No Hajima Ring Ring",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "Mottai-Nightland",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "Serious Hitomi",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "do do pi do",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "Family Party",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "Ring a Bell",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "Tokyo Highway",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "Koi Koi Koi",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "Sunngoi Aura",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "Explorer",
    img: "c5DqpgX.png",
    opts: {
      album: [ "ppf" ]
    }
  },
  {
    name: "Mondai Girl",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "My Room",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "KISEKAE",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Virtual Pamyu Pamyu",
    img: "c5DqpgX.png",
    opts: {
      album: [ "japamyu" ]
    }
  },
  {
    name: "Kizunami",
    img: "c5DqpgX.png",
    opts: {
      album: [ "japamyu" ]
    }
  },
  {
    name: "Harajuku Iyahoi",
    img: "c5DqpgX.png",
    opts: {
      album: [ "japamyu" ]
    }
  },
  {
    name: "Oto No Kuni",
    img: "c5DqpgX.png",
    opts: {
      album: [ "japamyu" ]
    }
  },
  {
    name: "Kimi No Mikata",
    img: "c5DqpgX.png",
    opts: {
      album: [ "japamyu" ]
    }
  },
  {
    name: "Chami Chami Charming",
    img: "c5DqpgX.png",
    opts: {
      album: [ "japamyu" ]
    }
  },
  {
    name: "Enka Natrium",
    img: "c5DqpgX.png",
    opts: {
      album: [ "japamyu" ]
    }
  },
  {
    name: "Koi No Hana",
    img: "c5DqpgX.png",
    opts: {
      album: [ "japamyu" ]
    }
  },
  {
    name: "Todoke Punch",
    img: "c5DqpgX.png",
    opts: {
      album: [ "japamyu" ]
    }
  },
  {
    name: "Sai & Co",
    img: "c5DqpgX.png",
    opts: {
      album: [ "japamyu" ]
    }
  },
  {
    name: "Loveberry",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Miracle Orange",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Demo Demo Mada Mada",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "100% No Jibun Ni",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Unite Unite",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Point of View",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Slow Mo",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Scanty Skimpy",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Crazy Party Night (Pumpkin No Gyakushu)",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "No No No",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Oshiete Dance Floor",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Kimama",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "KPP ON STAGE",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Cosmetic Coaster",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Easta",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  },
  {
    name: "Kimi Ga Iine Kuretara",
    img: "c5DqpgX.png",
    opts: {
      album: [ "bsides" ]
    }
  }
];

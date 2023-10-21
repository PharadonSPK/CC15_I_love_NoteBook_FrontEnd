const data = [
  {
    //1 R
    img: "https://media-cdn.bnn.in.th/249220/Acer-Notebook-Swift-Edge-SFA16-01-square_medium.jpg",
    title: "Acer Swift Go Silver",
    prevPrice: "$14000.00",
    newPrice: "2000.00",
    company: "Acer",
    brand: "acer",
  },

  {
    //2 B
    img: "https://media-cdn.bnn.in.th/224891/Asus-Notebook-ROG-Zephyrus-G14-GA402RJ-01-thumbnail.jpg",
    title: "Asus ROG Zephyrus G14 Gray",
    // prevPrice: "$15,000",
    newPrice: "7000.00",
    company: "asus",
    brand: "Asus",
  },

  {
    //3 B
    img: "https://media-cdn.bnn.in.th/327834/huawei-matebook-d15-1-square_medium.jpg",
    title: "Huawei Matebook D15 Grey",
    // prevPrice: "$16,000",
    newPrice: "9000.00",
    company: "huawei",
    brand: "Huawei",
  },
  {
    //4 B
    img: "https://media-cdn.bnn.in.th/305639/msi-modern-15-b7m-black-1-square_medium.jpg",
    title: "MSI Modern 15 Black",
    // prevPrice: "$17,000",
    newPrice: "6500.00",
    company: "msi",
    brand: "MSI",
  },
  {
    //5 B
    img: "https://media-cdn.bnn.in.th/325420/msi-notebook-stealth-16-mercedes-amg-motorsport-selenite-gray-1-square_medium.jpg",
    title: "MSI Stealth 16 Gray",
    // prevPrice: "$18,000",
    newPrice: "10000.00",
    company: "msi",
    brand: "MSI",
  },
  {
    //6 B
    img: "https://media-cdn.bnn.in.th/316522/msi-stealth-17-studio-a13vh-1-square_medium.jpg",
    title: "MSI Stealth 17 Black",
    // prevPrice: "$19,000",
    newPrice: "17999.00",
    company: "msi",
    brand: "MSI",
  },

  {
    //7 R
    img: "https://media-cdn.bnn.in.th/274521/MacBook_Pro_16_in_Space_Gray_PDP_1-square_medium.jpg",
    title: "Apple MacBook Pro 16 : M2 Max chip 12C - Space Gray",
    prevPrice: "$20000.00",
    newPrice: "19999.00",
    company: "Macbook",
    brand: "macbook",
  },

  {
    //8 R
    img: "https://media-cdn.bnn.in.th/269761/MacBook_Pro_16_in_Silver_PDP_1-square_medium.jpg",
    title: "Apple MacBook Pro 16 : M2 Pro chip 12C- Silver",
    prevPrice: "$9999.00",
    newPrice: "5000.00",
    company: "Macbook",
    brand: "macbook",
  },

  {
    //9 R
    img: "https://media-cdn.bnn.in.th/164112/MacBook_Pro_16-in_Space_Grey_PDP_Image_Position-1__TH-square_medium.jpg",
    title: "Apple MacBook Pro 16 : M1 Max chip 10C - Space Gray",
    prevPrice: "$22000.00",
    newPrice: "20000.00",
    company: "Macbook",
    brand: "macbook",
  },

  {
    //10 R
    img: "https://media-cdn.bnn.in.th/105781/Apple-MacBook-Air-13-M1-chip8C-CPU-7C-GPU-8GB-256GB-Gold-2020-1-square_medium.jpg",
    title: "Apple MacBook Air 13: M1 chip 8C - Gold",
    prevPrice: "$32000.00",
    newPrice: "30000.00",
    company: "Macbook",
    brand: "macbook",
  },
  {
    //11 R
    img: "https://media-cdn.bnn.in.th/215508/Lenovo-Notebook-Legion-5i-15IAH7H-01-square_medium.jpg",
    title: "Lenovo Legion 5i Storm Grey",
    prevPrice: "$42000.00",
    newPrice: "40000.00",
    company: "Lenovo",
    brand: "lenovo",
  },
  {
    //12 R
    img: "https://media-cdn.bnn.in.th/275620/Lenovo-Notebook-IdeaPad-1-15ADA7-01-square_medium.jpg",
    title: "Lenovo IdeaPad 1 Gray",
    prevPrice: "$43000.00",
    newPrice: "39000.00",
    company: "Lenovo",
    brand: "lenovo",
  },
  {
    //13 R
    img: "https://media-cdn.bnn.in.th/287981/Lenovo-IdeaPad-Gaming-3-15ACH6-01-square_medium.jpg",
    title: "Lenovo IdeaPad Gaming 3 Shadow Black",
    prevPrice: "$44000.00",
    newPrice: "40000.00",
    company: "Lenovo",
    brand: "lenovo",
  },
  {
    //14 R
    img: "https://media-cdn.bnn.in.th/343385/lenovo-notebook-ideapad-gaming-3i-15iah7-82s9014gta-onyx-grey-1-square_medium.jpg",
    title: "Lenovo IdeaPad Gaming 3 Onyx Grey",
    prevPrice: "$14000.00",
    newPrice: "11000.00",
    company: "Lenovo",
    brand: "lenovo",
  },

  {
    //15 B
    img: "https://media-cdn.bnn.in.th/280332/Asus-Notebook-ROG-Zephyrus-M16-GU604VI-N4036WS--1-square_medium.jpg",
    title: "Asus ROG Zephyrus M16 Black",
    // prevPrice: "$54,000",
    newPrice: "50000.00",
    company: "asus",
    brand: "Asus",
  },
  {
    //16 B
    img: "https://media-cdn.bnn.in.th/287685/Asus-ROG-Zephyrus-G16-01-square_medium.jpg",
    title: "Asus ROG Zephyrus G16 Gray",
    // prevPrice: "$64,000",
    newPrice: "60000.00",
    company: "asus",
    brand: "Asus",
  },
  {
    //17 B
    img: "https://media-cdn.bnn.in.th/286008/LG-GRAM-17Z90R-G-01-square_medium.jpg",
    title: "LG GRAM 17Z90R-G.AH55A6 Black",
    // prevPrice: "$74,000",
    newPrice: "70000.00",
    company: "lg",
    brand: "LG",
  },
  {
    //18 B
    img: "https://media-cdn.bnn.in.th/340020/hp-notebook-omen-16-xf0050ax-shadow-black-1-square_medium.jpg",
    title: "HP OMEN 16-XF0050AX Shadow black",
    // prevPrice: "$84,000",
    newPrice: "80000.00",
    company: "hp",
    brand: "HP",
  },
  {
    //19 R
    img: "https://media-cdn.bnn.in.th/241485/Acer-Notebook-Aspire-A515-01-square_medium.jpg",
    title: " Acer Aspire A515 Silver",
    prevPrice: "$94000.00",
    newPrice: "90000.00",
    company: "Acer",
    brand: "acer",
  },
  {
    //20 R
    img: "https://media-cdn.bnn.in.th/280036/Dell-Inspiron-5620-01-square_medium.jpg",
    title: "Dell Inspiron 5620 Platinum Silver",
    prevPrice: "$104000.00",
    newPrice: "100000.00",
    company: "Dell",
    brand: "dell",
  },
  {
    //21 R
    img: "https://media-cdn.bnn.in.th/211323/Acer-Notebook-Nitro-AN515-46-R1QY_Black-1-square_medium.jpg",
    title: "Acer Nitro AN515 Black",
    prevPrice: "$140000.00",
    newPrice: "121121.00",
    company: "Acer",
    brand: "acer",
  },
  {
    //22 R
    img: "https://media-cdn.bnn.in.th/286757/-Acer-Aspire-A315-43-R935-9-square_medium.jpg",
    title: "Acer Aspire A315 Black",
    prevPrice: "$141000.00",
    newPrice: "111111.00",
    company: "Acer",
    brand: "acer",
  },
  {
    //23 R
    img: "https://media-cdn.bnn.in.th/308231/dell-inspiron-15-3535-in3535t04cd001ogth-1-square_medium.jpg",
    title: "Dell Inspiron 15 3535 Black",
    prevPrice: "$33000.00",
    newPrice: "30000.00",
    company: "Dell",
    brand: "dell",
  },

  {
    //24 R
    img: "https://media-cdn.bnn.in.th/298279/Dell-Notebook-Inspiron-3530-01-square_medium.jpg",
    title: "Dell Inspiron 3530 Black",
    prevPrice: "$34000.00",
    newPrice: "30000.00",
    company: "Dell",
    brand: "dell",
  },
  {
    //25 R
    img: "https://media-cdn.bnn.in.th/295211/Predator-Helios-Neo-16-PHN16-71-01-square_medium.jpg",
    title: "Acer Predator Helios Neo 16 Black",
    prevPrice: "$55000.00",
    newPrice: "50000.00",
    company: "Acer",
    brand: "acer",
  },
  {
    //26 R
    img: "https://media-cdn.bnn.in.th/301706/Dell-XPS-13-Plus-9320-1-square_medium.jpg",
    title: "Dell XPS 13 Plus 9320 Graphite",
    prevPrice: "$77000.00",
    newPrice: "76000.00",
    company: "Dell",
    brand: "dell",
  },
  {
    //27 R
    img: "https://media-cdn.bnn.in.th/249904/Acer-Notebook-Swift-SF514-56T-71VH_Mist-Green-01-square_medium.jpg",
    title: "Acer Swift SF514 Green",
    prevPrice: "$88000.00",
    newPrice: "80000.00",
    company: "Acer",
    brand: "acer",
  },
  {
    //28 R
    img: "https://media-cdn.bnn.in.th/308373/dell-insprion-14-2in1-silver-1-square_medium.jpg",
    title: "Dell Insprion14 7430 Silver",
    prevPrice: "$29000.00",
    newPrice: "15000.00",
    company: "Dell",
    brand: "dell",
  },
  {
    //29 B
    img: "https://media-cdn.bnn.in.th/290399/HP-Notebook-15-01-square_medium.jpg",
    title: "HP Pavilion 15-eh3035AU Silver",
    // prevPrice: "$73,000",
    newPrice: "70000.00",
    company: "hp",
    brand: "HP",
  },
  {
    //30 B
    img: "https://media-cdn.bnn.in.th/217531/Huawei-Notebook-MateBook-X-Pro-01-square_medium.jpg",
    title: "Huawei MateBook X Pro (53013FKX) Ink Blue",
    // prevPrice: "$39,000",
    newPrice: "29000.00",
    company: "huawei",
    brand: "Huawei",
  },
];

export default data;

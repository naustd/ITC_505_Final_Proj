import { AiFillStar } from "react-icons/ai";

const data = [
  {
    id: 1,
    img: "https://t3.ftcdn.net/jpg/00/34/61/76/240_F_34617669_p9r4GrR83TBEXCZrRny6AaigqPUEPFp5.jpg",
    title: "Tomatoes",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vegetables",
    color: "white",
    category: "Organic Veggies",
    quantity: 0,
  },
  {
    id: 2,
    img: "https://th.bing.com/th/id/R.535f774640fe556a2d0c764fb34eae67?rik=tgy2otrbumA%2b6A&pid=ImgRaw&r=0",
    title: "Carrots",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vegetables",
    color: "red",
    category: "Organic Veggies",
    quantity: 0,
  },

  {
    id: 3,
    img: "https://t4.ftcdn.net/jpg/00/53/59/03/240_F_53590332_GktsdggabKrEv4a3URfSalFHofBoFOqL.jpg",
    title: "Fresh lettuce",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vegetables",
    color: "green",
    category: "Organic Veggies",
    quantity: 0,
  },
  // {
  //   id: 4,
  //   img: "https://t3.ftcdn.net/jpg/00/68/10/58/240_F_68105885_hf9yIAhaAoa69xgSnwviKsomIh9blBJJ.jpg",
  //   title: "Nike Running Shoe",
  //   star: <AiFillStar className="rating-star" />,
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "200",
  //   company: "Adidas",
  //   color: "black",
  //   category: "sneakers",
  //   quantity: 0,
  // },
  {
    id: 5,
    img: "https://t4.ftcdn.net/jpg/03/88/01/89/240_F_388018945_9D92H3TrPv5KHMvuJL5XCJRIFYu39Py9.jpg",
    title: "Pumpkin",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Fruits",
    color: "green",
    category: "Fruits",
    quantity: 0,
  },
  {
    id: 6,
    img: "https://t3.ftcdn.net/jpg/05/81/01/52/240_F_581015203_WWK4JBJksyc6Rw3PCQNN4y17fUkCL3i8.jpg",
    title: "Watermelon",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Fruits",
    color: "black",
    category: "Fruits",
    quantity: 0,
  },

  {
    id: 7,
    img: "https://t3.ftcdn.net/jpg/03/02/14/64/240_F_302146424_NN1wHIPT87tBNOU6C9bIralZoOhpyr3C.jpg",
    title: "Mango",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Fruits",
    color: "white",
    category: "Fruits",
    quantity: 0,
  },

  {
    id: 8,
    img: "https://t4.ftcdn.net/jpg/03/89/85/85/240_F_389858598_TSNp6HysawjDuyAtRrJdru6Kf8LEZXbt.jpg",
    title: "Bitter Gourd",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vegetables",
    color: "green",
    category: "Organic Veggies",
    quantity: 0,
  },

  // {
  //   id: 9,
  //   img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
  //   title: "Nike Men's Sneaker",
  //   star: <AiFillStar className="rating-star" />,
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "200",
  //   company: "Adidas",
  //   color: "blue",
  //   category: "sneakers",
  //   quantity: 0,
  // },

  // {
  //   id: 10,
  //   img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
  //   title: "PUMA BLACK-OCE",
  //   star: <AiFillStar className="rating-star" />,
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "150",
  //   company: "Puma",
  //   color: "green",
  //   category: "sneakers",
  //   quantity: 0,
  // },
  {
    id: 11,
    img: "https://t3.ftcdn.net/jpg/00/75/01/62/240_F_75016244_ePvIpm1fTcPSuvufJLdeyNwZ9W9Meij8.jpg",
    title: "Snake Gourd",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vegetables",
    color: "green",
    category: "Organic Veggies",
    quantity: 0,
  },
  {
    id: 12,
    img: "https://t3.ftcdn.net/jpg/06/18/99/30/240_F_618993059_kQpglgQvCPgZApU9AOas4gR9feqBR3QM.jpg",
    title: "Purple Cabbage",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vegetables",
    color: "green",
    category: "Organic Veggies",
    quantity: 0,
  },
  {
    id: 13,
    img: "https://t3.ftcdn.net/jpg/04/93/47/10/240_F_493471062_JIq1ALXM3NpQ4KD5avWxBikq3jbA7gwT.jpg",
    title: "Fresh Red Turnip",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vegetables",
    color: "green",
    category: "Organic Veggies",
    quantity: 0,
  },
  {
    id: 14,
    img: "https://t3.ftcdn.net/jpg/03/15/91/18/240_F_315911867_oXWbYu8JRFqePuihZHic2EVTDBtYdUcI.jpg",
    title: "Mushrooms",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vegetables",
    color: "green",
    category: "Organic Veggies",
    quantity: 0,
  },
  {
    id: 15,
    img: "https://t4.ftcdn.net/jpg/05/74/96/85/240_F_574968571_2a678KyyQgWClAvQjxGjXQyFAu0P781d.jpg",
    title: "Moringa",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vegetables",
    color: "green",
    category: "Organic Veggies",
    quantity: 0,
  },
  {
    id: 16,
    img: "https://t3.ftcdn.net/jpg/00/02/42/92/240_F_2429251_acdW1GQwKpqEk7zsOPQaSTU0tGHIop.jpg",
    title: "Coriander",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vegetables",
    color: "green",
    category: "Organic Veggies",
    quantity: 0,
  },
  {
    id: 17,
    img: "https://t4.ftcdn.net/jpg/01/38/59/65/240_F_138596528_dG7J8xrEXROzGkE0PCgKjDWyclYUWfzz.jpg",
    title: "Broccoli",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vegetables",
    color: "green",
    category: "Organic Veggies",
    quantity: 0,
  },
  {
    id: 18,
    img: "https://t3.ftcdn.net/jpg/00/61/22/36/240_F_61223649_5fejM4RPC6mjJLRDw7jzZ7tVrIC6WeBR.jpg",
    title: "Oranges",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Fruits",
    color: "green",
    category: "Fruits",
    quantity: 0,
  },
  {
    id: 19,
    img: "https://t3.ftcdn.net/jpg/00/69/98/78/240_F_69987854_1Dt6aehRFaoiBzifCorA2yPdJYXuabIR.jpg",
    title: "Grapes",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Fruits",
    color: "green",
    category: "Fruits",
    quantity: 0,
  },
  {
    id: 20,
    img: "https://t3.ftcdn.net/jpg/02/46/69/80/240_F_246698055_Vg3xmiBbRFD3evEsfnHCAXz8lX85nQV9.jpg",
    title: "Apples",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Fruits",
    color: "green",
    category: "Fruits",
    quantity: 0,
  },
  {
    id: 21,
    img: "https://t3.ftcdn.net/jpg/00/74/34/08/240_F_74340881_BM2WcKS2sQFHv9YNYRU6PntGlVSpBf0C.jpg",
    title: "Strawberries",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Fruits",
    color: "green",
    category: "Fruits",
    quantity: 0,
  },
  {
    id: 22,
    img: "https://t3.ftcdn.net/jpg/02/77/66/30/240_F_277663022_w0z4vl6sODmgSnH5GmLAV1GrpbtpZfcL.jpg",
    title: "Muskmelon",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Fruits",
    color: "green",
    category: "Fruits",
    quantity: 0,
  },
  {
    id: 23,
    img: "https://t4.ftcdn.net/jpg/00/28/68/33/240_F_28683389_PNtWr8wTFrRLfbXMuYj5U1cz9LlhH6rW.jpg",
    title: "Honeydews",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Fruits",
    color: "green",
    category: "Fruits",
    quantity: 0,
  },
  {
    id: 24,
    img: "https://t3.ftcdn.net/jpg/02/94/26/88/240_F_294268809_vxDdOHYlbdO48oOgSDXyZUcQXpJekf2W.jpg",
    title: "kiwi",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Fruits",
    color: "green",
    category: "Fruits",
    quantity: 0,
  },
  {
    id: 25,
    img: "https://t4.ftcdn.net/jpg/02/99/29/05/240_F_299290543_D7Hg1njhj3SZc2JiYp2hsT3HWk9WIFrL.jpg",
    title: "Banana",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Fruits",
    color: "green",
    category: "Fruits",
    quantity: 0,
  },
  {
    id: 26,
    img: "https://t3.ftcdn.net/jpg/00/52/32/48/240_F_52324876_RysLErqfGu2YexMj87bCn7YrMyWGe37w.jpg",
    title: "Pine Apple",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Fruits",
    color: "green",
    category: "Fruits",
    quantity: 0,
  },
  {
    id: 24,
    img: "https://t3.ftcdn.net/jpg/02/25/98/64/240_F_225986485_UJNciycQeliQMW0tCE8ZO8mzT11ezYPJ.jpg",
    title: "Dragon Fruit",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Fruits",
    color: "green",
    category: "Fruits",
    quantity: 0,
  },
  {
    id: 25,
    img: "https://t4.ftcdn.net/jpg/04/71/01/39/240_F_471013994_W5G3BDAoITB3GP5wYdk6zgvfLQZIX96n.jpg",
    title: "Paneer",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Milk Products",
    color: "white",
    category: "Nuts",
  },
  {
    id: 26,
    img: "https://t3.ftcdn.net/jpg/03/32/01/86/240_F_332018617_4RiHC5oU33UyZhAQ9QbivZin3kBSEmQ8.jpg",
    title: "Plain Yogurt",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Milk Products",
    color: "white",
    category: "Nuts",
  },
  {
    id: 27,
    img: "https://t3.ftcdn.net/jpg/03/16/50/54/240_F_316505425_c5VECb4J7GczRza3q1MvYMdRTgHlN2Dp.jpg",
    title: "Milk",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Milk Products",
    color: "white",
    category: "Nuts",
  },
  {
    id: 28,
    img: "https://t4.ftcdn.net/jpg/00/76/31/47/240_F_76314749_bo3pZIVZa8nwTZW18hCtSxceM3r7cvi3.jpg",
    title: "Cheese",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Milk Products",
    color: "white",
    category: "Nuts",
  },
  {
    id: 29,
    img: "https://t3.ftcdn.net/jpg/02/40/14/70/240_F_240147049_1DKgPqORVBXfHdqh7YZvCgDbQl7LVptM.jpg",
    title: "Butter",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Milk Products",
    color: "white",
    category: "Nuts",
  },
  {
    id: 30,
    img: "https://t3.ftcdn.net/jpg/00/55/79/34/240_F_55793423_VYufyrcBaeuvwyCmqPywEDoi3qhndMXy.jpg",
    title: "Cashew Nuts",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
  {
    id: 31,
    img: "https://t4.ftcdn.net/jpg/00/97/18/67/240_F_97186746_UVjkZkxV3nAqYkXXX9ZqmS7YIoDCtM9E.jpg",
    title: "Dried Strawberries",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
  {
    id: 32,
    img: "https://as1.ftcdn.net/v2/jpg/02/52/23/40/1000_F_252234089_dFXXvDvdsErQsis6Y209qVnsOIfF5ClZ.jpg",
    title: "Dry Papaya",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
  {
    id: 33,
    img: "https://as1.ftcdn.net/v2/jpg/01/74/84/02/1000_F_174840206_YAoWUgsrbTcP78Sl1KQilKq6lG7MKzvj.jpg",
    title: "Dried Blueberries",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
  {
    id: 34,
    img: "https://as2.ftcdn.net/v2/jpg/06/53/17/29/1000_F_653172907_PJ0mcnidQrIHBrLJRO37jBqvynTaPinF.jpg",
    title: "Dried Black Fruits",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
  {
    id: 35,
    img: "https://as2.ftcdn.net/v2/jpg/02/68/67/65/1000_F_268676587_dZxZwDwYlUN0L4kxbgDbmKMBUTNv5luY.jpg",
    title: "Dried Pineapple",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
  {
    id: 36,
    img: "https://t3.ftcdn.net/jpg/00/63/90/76/240_F_63907683_66PIt9QkyM9HivlN0Bg5PQ9AlGToGZND.jpg",
    title: "Dried Cherry",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
  {
    id: 37,
    img: "https://t3.ftcdn.net/jpg/00/65/94/42/240_F_65944251_fHcaooP1wRMaUm2oGr8oYN3TB7Zi5Yxb.jpg",
    title: "Walnuts",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
  {
    id: 38,
    img: "https://t3.ftcdn.net/jpg/01/01/93/50/240_F_101935024_EZzFEAmTIDRNFvaJXk38RjxUtOw2JKUO.jpg",
    title: "Dried Anjeer",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
  {
    id: 39,
    img: "https://t3.ftcdn.net/jpg/02/71/48/38/240_F_271483849_Cm3tVeNvbKYxZ1ONC5cwI3oPv6g5mywp.jpg",
    title: "Fresh Dates",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
  {
    id: 40,
    img: "https://t4.ftcdn.net/jpg/04/57/14/55/240_F_457145539_qsQwKwSXwgU2pGKAffhQe9bPuGKVVmod.jpg",
    title: "Pistachio Nuts",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
  {
    id: 41,
    img: "https://t4.ftcdn.net/jpg/00/61/98/07/240_F_61980755_J1cjCRn98kv9SgJKr59TE7YoZ5G7Stgc.jpg",
    title: "Dried Apricots",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Dry Fruits",
    color: "red",
    category: "sneakers",
    quantity: 0,
  },
];

export default data;
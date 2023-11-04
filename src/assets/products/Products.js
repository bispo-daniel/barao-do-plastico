import { atom } from "jotai";

import Calça from "../images/Calça.png";
import ConjuntoCalça01 from "../images/ConjuntoCalça01.png";
import ConjuntoCalça02 from "../images/ConjuntoCalça02.png";
import ConjuntoCalça03 from "../images/ConjuntoCalça03.png";
import ConjuntoCalça04 from "../images/ConjuntoCalça04.png";
import ConjuntoCalça05 from "../images/ConjuntoCalça05.png";
import ConjuntoCalça06 from "../images/ConjuntoCalça06.png";
import ConjuntoCalça07 from "../images/ConjuntoCalça07.png";
import ConjuntoCalça08 from "../images/ConjuntoCalça08.png";
import ConjuntoCalça09 from "../images/ConjuntoCalça09.png";
import ConjuntoShort01 from "../images/ConjuntoShort01.png";
import ConjuntoShort02 from "../images/ConjuntoShort02.png";
import ConjuntoShort03 from "../images/ConjuntoShort03.png";
import ConjuntoShort04 from "../images/ConjuntoShort04.png";
import ConjuntoShort05 from "../images/ConjuntoShort05.png";
import ConjuntoShort06 from "../images/ConjuntoShort06.png";
import ConjuntoShort07 from "../images/ConjuntoShort07.png";
import ConjuntoShort08 from "../images/ConjuntoShort08.png";
import Cropped from "../images/Cropped.png";
import Short from "../images/Short.png";
import ShortSaia from "../images/ShortSaia.png";


export const productsAtom = atom([
  {
    productId: 0,
    productName: "Cropped",
    productPrice: 19.99,
    quantity: 0,
    imagePath: Cropped,
    category: "Cropped",
    productDescription: "Pra usar Cropped com amor.",
  },
  {
    productId: 1,
    productName: "Calça",
    productPrice: 6.99,
    quantity: 0,
    imagePath: Calça,
    category: "Calça",
    productDescription: "Uma calça para usar...",
  },
  {
    productId: 2,
    productName: "Short",
    productPrice: 3.99,
    quantity: 0,
    imagePath: Short,
    category: "Short",
    productDescription: "Short show de boulas.",
  },
  {
    productId: 3,
    productName: "ShortSaia",
    productPrice: 6.99,
    quantity: 0,
    imagePath: ShortSaia,
    category: "ShortSaia",
    productDescription: "ShortSaia muito helanca show.",
  },
  {
    productId: 4,
    productName: "Conjunto Calça 01",
    productPrice: 34.99,
    quantity: 0,
    imagePath: ConjuntoCalça01,
    category: "Conjunto Calça",
    productDescription: "Conjunto de calça com design moderno.",
  },
  {
    productId: 5,
    productName: "Conjunto Calça 02",
    productPrice: 34.99,
    quantity: 0,
    imagePath: ConjuntoCalça02,
    category: "Conjunto Calça",
    productDescription: "Conjunto de calça com design moderno.",
  },
  {
    productId: 6,
    productName: "Conjunto Calça 03",
    productPrice: 34.99,
    quantity: 0,
    imagePath: ConjuntoCalça03,
    category: "Conjunto Calça",
    productDescription: "Conjunto de calça com design moderno.",
  },
  {
    productId: 7,
    productName: "Conjunto Calça 04",
    productPrice: 36.99,
    quantity: 0,
    imagePath: ConjuntoCalça04,
    category: "Conjunto Calça",
    productDescription: "Conjunto de calça para ocasiões especiais.",
  },
  {
    productId: 8,
    productName: "Conjunto Calça 05",
    productPrice: 38.99,
    quantity: 0,
    imagePath: ConjuntoCalça05,
    category: "Conjunto Calça",
    productDescription: "Conjunto de calça elegante para eventos.",
  },
  {
    productId: 9,
    productName: "Conjunto Calça 06",
    productPrice: 39.99,
    quantity: 0,
    imagePath: ConjuntoCalça06,
    category: "Conjunto Calça",
    productDescription: "Conjunto de calça de alta qualidade.",
  },
  {
    productId: 10,
    productName: "Conjunto Calça 07",
    productPrice: 39.99,
    quantity: 0,
    imagePath: ConjuntoCalça06,
    category: "Conjunto Calça",
    productDescription: "Conjunto de calça de alta qualidade.",
  },
  {
    productId: 11,
    productName: "Conjunto Calça 08",
    productPrice: 39.99,
    quantity: 0,
    imagePath: ConjuntoCalça06,
    category: "Conjunto Calça",
    productDescription: "Conjunto de calça de alta qualidade.",
  },
  {
    productId: 12,
    productName: "Conjunto Calça 09",
    productPrice: 39.99,
    quantity: 0,
    imagePath: ConjuntoCalça06,
    category: "Conjunto Calça",
    productDescription: "Conjunto de calça de alta qualidade.",
  },
  {
    productId: 13,
    productName: "Conjunto Short 01",
    productPrice: 26.99,
    quantity: 0,
    imagePath: ConjuntoShort01,
    category: "Conjunto Short",
    productDescription: "Conjunto de short casual.",
  },
  {
    productId: 14,
    productName: "Conjunto Short 02",
    productPrice: 28.99,
    quantity: 0,
    imagePath: ConjuntoShort02,
    category: "Conjunto Short",
    productDescription: "Conjunto de short estampado.",
  },
  {
    productId: 15,
    productName: "Conjunto Short 03",
    productPrice: 30.99,
    quantity: 0,
    imagePath: ConjuntoShort03,
    category: "Conjunto Short",
    productDescription: "Conjunto de short esportivo.",
  },
  {
    productId: 16,
    productName: "Conjunto Short 04",
    productPrice: 32.99,
    quantity: 0,
    imagePath: ConjuntoShort04,
    category: "Conjunto Short",
    productDescription: "Conjunto de short para o verão.",
  },
  {
    productId: 17,
    productName: "Conjunto Short 05",
    productPrice: 29.99,
    quantity: 0,
    imagePath: ConjuntoShort05,
    category: "Conjunto Short",
    productDescription: "Conjunto de short com estilo único.",
  },
  {
    productId: 18,
    productName: "Conjunto Short 06",
    productPrice: 31.99,
    quantity: 0,
    imagePath: ConjuntoShort06,
    category: "Conjunto Short",
    productDescription: "Conjunto de short moderno para mulheres.",
  },
  {
    productId: 19,
    productName: "Conjunto Short 07",
    productPrice: 33.99,
    quantity: 0,
    imagePath: ConjuntoShort07,
    category: "Conjunto Short",
    productDescription: "Conjunto de short confortável e elegante.",
  },
  {
    productId: 20,
    productName: "Conjunto Short 08",
    productPrice: 35.99,
    quantity: 0,
    imagePath: ConjuntoShort08,
    category: "Conjunto Short",
    productDescription: "Conjunto de short de alta qualidade.",
  },
]);

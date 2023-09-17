import { atom } from "jotai";

import BRUH from "../images/BRUH.png";
import CamisetaUSA from "../images/CamisetaUSA.png";
import Compressao from "../images/Compressao.png";
import Cropped from "../images/Cropped.png";
import Croppedd from "../images/Croppedd.png";
import Helanca from "../images/Helanca.png";
import Legging from "../images/Legging.png";
import LineShirt from "../images/LineShirt.png";
import Longa from "../images/Longa.png";
import PinkLegging from "../images/PinkLegging.png";
import RegataBlack from "../images/RegataBlack.png";
import RegataPink from "../images/RegataPink.png";

export const productsAtom = atom([
  {
    productId: 0,
    productName: "Conjuntinho",
    productPrice: 19.99,
    quantity: 0,
    imagePath: BRUH,
    category: "Conjuntos",
    productDescription: "Pra usar conjuntinho com o amor.",
  },
  {
    productId: 1,
    productName: "Camiseta USA",
    productPrice: 12.99,
    quantity: 0,
    imagePath: CamisetaUSA,
    category: "Camisetas",
    productDescription:
      "Camiseta da marinha dos Estados dos Unidos da America.",
  },
  {
    productId: 2,
    productName: "Calça Acqua",
    productPrice: 6.99,
    quantity: 0,
    imagePath: Compressao,
    category: "Calça",
    productDescription: "Uma calça para usar...",
  },
  {
    productId: 3,
    productName: "Cropped",
    productPrice: 3.99,
    quantity: 0,
    imagePath: Cropped,
    category: "Cropped",
    productDescription: "Outro Cropped show de boulas.",
  },
  {
    productId: 4,
    productName: "Calça Helanca",
    productPrice: 6.99,
    quantity: 0,
    imagePath: Helanca,
    category: "Calça",
    productDescription: "Calça muito helanca show da bahiana.",
  },
  {
    productId: 5,
    productName: "Cropped",
    productPrice: 3.5,
    quantity: 0,
    imagePath: Croppedd,
    category: "Cropped",
    productDescription: "Cropped muito bom mesmo!",
  },
  {
    productId: 6,
    productName: "Calça",
    productPrice: 29.99,
    quantity: 0,
    imagePath: Legging,
    category: "Calça",
    productDescription: "Uma calça descrição muito boa mesmo.",
  },
  {
    productId: 7,
    productName: "Regata Fina",
    productPrice: 6.0,
    quantity: 0,
    imagePath: LineShirt,
    category: "Regata",
    productDescription: "Regata Finíssima.",
  },
  {
    productId: 8,
    productName: "Camiseta Feminina",
    productPrice: 65.0,
    quantity: 0,
    imagePath: Longa,
    category: "Manga Longa",
    productDescription: "Camiseta Feminina Manga Longa.",
  },
  {
    productId: 9,
    productName: "Calça Legging",
    productPrice: 99.99,
    quantity: 0,
    imagePath: PinkLegging,
    category: "Calça",
    productDescription: "Calça Legging Rosa.",
  },
  {
    productId: 10,
    productName: "Regata Feminina",
    productPrice: 60.0,
    quantity: 0,
    imagePath: RegataBlack,
    category: "Regata",
    productDescription: "Regata Feminina Preta.",
  },
  {
    productId: 11,
    productName: "Regata Feminina",
    productPrice: 90.0,
    quantity: 0,
    imagePath: RegataPink,
    category: "Regata",
    productDescription: "Regata Feminina Rosa.",
  },
]);

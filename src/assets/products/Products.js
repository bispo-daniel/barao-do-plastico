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
    productDescription:
      "A vassoura é uma ferramenta essencial de limpeza com cerdas naturais ou sintéticas utilizada para varrer e remover sujeira de superfícies. Versátil e de fácil manuseio, é amplamente utilizada em ambientes domésticos e comerciais para manter a limpeza e a higiene.",
  },
  {
    productId: 1,
    productName: "Camiseta USA",
    productPrice: 12.99,
    quantity: 0,
    imagePath: CamisetaUSA,
    category: "Camisetas",
    productDescription:
      "O RODO DE PUXAR ÁGUA é um utensílio prático e eficiente para remover água e líquidos de superfícies lisas. Com sua lâmina de borracha flexível e resistente, o rodo desliza suavemente, removendo rapidamente a água em pisos, vidros, azulejos e outras superfícies. Sua estrutura robusta e fácil manuseio o tornam uma ferramenta ideal para a limpeza de ambientes internos e externos. Agilize a tarefa de secagem com o RODO DE PUXAR ÁGUA, obtendo resultados excepcionais em cada uso.",
  },
  {
    productId: 2,
    productName: "Calça Acqua",
    productPrice: 6.99,
    quantity: 0,
    imagePath: Compressao,
    category: "Calça",
    productDescription:
      "VEJA é um renomado produto de limpeza que oferece excelentes resultados. Sua fórmula poderosa é especialmente projetada para combater sujeiras, manchas e resíduos difíceis em diversas superfícies. Com sua ação eficaz, VEJA garante uma limpeza profunda em vidros, azulejos, cerâmicas, metais e muito mais. Sua praticidade torna-o uma escolha confiável para agilizar a limpeza em ambientes domésticos e comerciais, deixando tudo impecável e brilhante. Confie em VEJA para obter um ambiente limpo e higienizado com facilidade e eficiência.",
  },
  {
    productId: 3,
    productName: "Cropped",
    productPrice: 3.99,
    quantity: 0,
    imagePath: Cropped,
    category: "Cropped",
    productDescription:
      "UAU é um poderoso produto de limpeza que entrega resultados impressionantes. Sua fórmula avançada foi especialmente desenvolvida para eliminar sujeiras, manchas e resíduos difíceis em várias superfícies. Com uma ação eficaz, UAU proporciona uma limpeza profunda em vidros, azulejos, cerâmicas, metais e muito mais. Sua praticidade o torna ideal para agilizar a limpeza em ambientes domésticos e comerciais, garantindo um resultado impecável em todas as ocasiões.",
  },
  {
    productId: 4,
    productName: "Calça Helanca",
    productPrice: 6.99,
    quantity: 0,
    imagePath: Helanca,
    category: "Calça",
    productDescription:
      "O ZAP é um produto de limpeza eficiente e versátil. Sua fórmula especial foi desenvolvida para remover sujeiras, manchas e resíduos difíceis em diversas superfícies. Com sua ação poderosa, o ZAP é capaz de limpar superfícies como vidros, azulejos, cerâmicas, metais e muito mais. Sua praticidade torna-o uma escolha ideal para facilitar a limpeza em diferentes contextos domésticos e comerciais.",
  },
  {
    productId: 5,
    productName: "Cropped",
    productPrice: 3.5,
    quantity: 0,
    imagePath: Croppedd,
    category: "Cropped",
    productDescription:
      "O Bombril é uma marca famosa de palha de aço utilizada como produto de limpeza. Sua função é remover sujeiras, manchas e resíduos difíceis em diversas superfícies. Com seu formato emaranhado e superfície abrasiva, o Bombril é eficaz para limpar panelas, utensílios de cozinha, polir metais e remover ferrugem. Sua versatilidade o torna uma ferramenta prática e amplamente utilizada para facilitar a limpeza em diferentes contextos domésticos e industriais.",
  },
  {
    productId: 6,
    productName: "Calça",
    productPrice: 29.99,
    quantity: 0,
    imagePath: Legging,
    category: "Calça",
    productDescription:
      "O Pinho Sol é um produto de limpeza multiuso que se destaca por sua eficiência na desinfecção e limpeza de superfícies. Sua fórmula poderosa, com essência de pinho, remove sujeira, germes e odores indesejados. Versátil e de fácil aplicação, o Pinho Sol é ideal para uso em pisos, azulejos, banheiros e diversas áreas da casa. Proporciona uma limpeza profunda, deixando um agradável aroma de frescor. Com o Pinho Sol, você mantém sua casa limpa e higienizada, criando um ambiente mais saudável para toda a família.",
  },
  {
    productId: 7,
    productName: "Regata Fina",
    productPrice: 6.0,
    quantity: 0,
    imagePath: LineShirt,
    category: "Regata",
    productDescription:
      "O detergente é um produto de limpeza líquido que desempenha um papel fundamental na remoção de gordura, sujeira e resíduos de utensílios de cozinha, louças e superfícies laváveis. Sua fórmula concentrada e eficaz permite uma limpeza rápida e eficiente, deixando os itens brilhantes e higienizados. Com uma pequena quantidade, o detergente cria espuma abundante que facilita a remoção de sujeiras mais difíceis. Versátil e de uso diário, o detergente é uma escolha confiável para manter a cozinha e outros ambientes limpos e livres de resíduos.",
  },
  {
    productId: 8,
    productName: "Camiseta Feminina",
    productPrice: 65.0,
    quantity: 0,
    imagePath: Longa,
    category: "Manga Longa",
    productDescription: "Camiseta Feminina Manga Longa",
  },
  {
    productId: 9,
    productName: "Calça Legging",
    productPrice: 99.99,
    quantity: 0,
    imagePath: PinkLegging,
    category: "Calça",
    productDescription: "Calça Legging Rosa",
  },
  {
    productId: 10,
    productName: "Regata Feminina",
    productPrice: 60.0,
    quantity: 0,
    imagePath: RegataBlack,
    category: "Regata",
    productDescription: "Regata Feminina Preta",
  },
  {
    productId: 11,
    productName: "Regata Feminina",
    productPrice: 90.0,
    quantity: 0,
    imagePath: RegataPink,
    category: "Regata",
    productDescription: "Regata Feminina Rosa",
  },
]);

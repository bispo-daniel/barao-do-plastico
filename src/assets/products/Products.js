import { atom } from "jotai";

import VassouraImage from "../images/Vassoura.png";
import RodoImage from "../images/Rodo.png";
import VejaImage from "../images/Veja.webp";
import UAUImage from "../images/UAU.png";
import ZapImage from "../images/Zap.png";
import BombrilImage from "../images/Bombril.png";
import PinhoSolImage from "../images/PinhoSol.png";
import DetergenteImage from "../images/Detergente.png";

import BlusaoImage from "../images/Blusao.png";
import PoloImage from "../images/Polo.png";
import CalçaImage from "../images/Calça.png";
import TenisImage from "../images/Tenis.png";
import ChapeuImage from "../images/Chapeu.png";

import Guitar01 from "../images/Guitar01.png";
import Guitar02 from "../images/Guitar02.png";
import Guitar03 from "../images/Guitar03.png";

export const productsAtom = atom([
  {
    productId: 0,
    productName: "Vassoura",
    productPrice: 19.99,
    quantity: 0,
    imagePath: VassouraImage,
    category: "Limpeza",
    productDescription:
      "A vassoura é uma ferramenta essencial de limpeza com cerdas naturais ou sintéticas utilizada para varrer e remover sujeira de superfícies. Versátil e de fácil manuseio, é amplamente utilizada em ambientes domésticos e comerciais para manter a limpeza e a higiene.",
  },
  {
    productId: 1,
    productName: "Rodo",
    productPrice: 12.99,
    quantity: 0,
    imagePath: RodoImage,
    category: "Limpeza",
    productDescription:
      "O RODO DE PUXAR ÁGUA é um utensílio prático e eficiente para remover água e líquidos de superfícies lisas. Com sua lâmina de borracha flexível e resistente, o rodo desliza suavemente, removendo rapidamente a água em pisos, vidros, azulejos e outras superfícies. Sua estrutura robusta e fácil manuseio o tornam uma ferramenta ideal para a limpeza de ambientes internos e externos. Agilize a tarefa de secagem com o RODO DE PUXAR ÁGUA, obtendo resultados excepcionais em cada uso.",
  },
  {
    productId: 2,
    productName: "Veja",
    productPrice: 6.99,
    quantity: 0,
    imagePath: VejaImage,
    category: "Limpeza",
    productDescription:
      "VEJA é um renomado produto de limpeza que oferece excelentes resultados. Sua fórmula poderosa é especialmente projetada para combater sujeiras, manchas e resíduos difíceis em diversas superfícies. Com sua ação eficaz, VEJA garante uma limpeza profunda em vidros, azulejos, cerâmicas, metais e muito mais. Sua praticidade torna-o uma escolha confiável para agilizar a limpeza em ambientes domésticos e comerciais, deixando tudo impecável e brilhante. Confie em VEJA para obter um ambiente limpo e higienizado com facilidade e eficiência.",
  },
  {
    productId: 3,
    productName: "UAU",
    productPrice: 3.99,
    quantity: 0,
    imagePath: UAUImage,
    category: "Limpeza",
    productDescription:
      "UAU é um poderoso produto de limpeza que entrega resultados impressionantes. Sua fórmula avançada foi especialmente desenvolvida para eliminar sujeiras, manchas e resíduos difíceis em várias superfícies. Com uma ação eficaz, UAU proporciona uma limpeza profunda em vidros, azulejos, cerâmicas, metais e muito mais. Sua praticidade o torna ideal para agilizar a limpeza em ambientes domésticos e comerciais, garantindo um resultado impecável em todas as ocasiões.",
  },
  {
    productId: 4,
    productName: "Zap",
    productPrice: 6.99,
    quantity: 0,
    imagePath: ZapImage,
    category: "Limpeza",
    productDescription:
      "O ZAP é um produto de limpeza eficiente e versátil. Sua fórmula especial foi desenvolvida para remover sujeiras, manchas e resíduos difíceis em diversas superfícies. Com sua ação poderosa, o ZAP é capaz de limpar superfícies como vidros, azulejos, cerâmicas, metais e muito mais. Sua praticidade torna-o uma escolha ideal para facilitar a limpeza em diferentes contextos domésticos e comerciais.",
  },
  {
    productId: 5,
    productName: "Bombril",
    productPrice: 3.5,
    quantity: 0,
    imagePath: BombrilImage,
    category: "Limpeza",
    productDescription:
      "O Bombril é uma marca famosa de palha de aço utilizada como produto de limpeza. Sua função é remover sujeiras, manchas e resíduos difíceis em diversas superfícies. Com seu formato emaranhado e superfície abrasiva, o Bombril é eficaz para limpar panelas, utensílios de cozinha, polir metais e remover ferrugem. Sua versatilidade o torna uma ferramenta prática e amplamente utilizada para facilitar a limpeza em diferentes contextos domésticos e industriais.",
  },
  {
    productId: 6,
    productName: "Pinho Sol",
    productPrice: 29.99,
    quantity: 0,
    imagePath: PinhoSolImage,
    category: "Limpeza",
    productDescription:
      "O Pinho Sol é um produto de limpeza multiuso que se destaca por sua eficiência na desinfecção e limpeza de superfícies. Sua fórmula poderosa, com essência de pinho, remove sujeira, germes e odores indesejados. Versátil e de fácil aplicação, o Pinho Sol é ideal para uso em pisos, azulejos, banheiros e diversas áreas da casa. Proporciona uma limpeza profunda, deixando um agradável aroma de frescor. Com o Pinho Sol, você mantém sua casa limpa e higienizada, criando um ambiente mais saudável para toda a família.",
  },
  {
    productId: 7,
    productName: "Detergente",
    productPrice: 6.0,
    quantity: 0,
    imagePath: DetergenteImage,
    category: "Limpeza",
    productDescription:
      "O detergente é um produto de limpeza líquido que desempenha um papel fundamental na remoção de gordura, sujeira e resíduos de utensílios de cozinha, louças e superfícies laváveis. Sua fórmula concentrada e eficaz permite uma limpeza rápida e eficiente, deixando os itens brilhantes e higienizados. Com uma pequena quantidade, o detergente cria espuma abundante que facilita a remoção de sujeiras mais difíceis. Versátil e de uso diário, o detergente é uma escolha confiável para manter a cozinha e outros ambientes limpos e livres de resíduos.",
  },
  {
    productId: 8,
    productName: "Chápeu",
    productPrice: 65.0,
    quantity: 0,
    imagePath: ChapeuImage,
    category: "Roupas",
    productDescription: "Chapéu do guitarrista Prince (Confia!)",
  },
  {
    productId: 9,
    productName: "Blusão",
    productPrice: 99.99,
    quantity: 0,
    imagePath: BlusaoImage,
    category: "Roupas",
    productDescription: "Blusão de moletom preto básico.",
  },
  {
    productId: 10,
    productName: "Polo",
    productPrice: 60.0,
    quantity: 0,
    imagePath: PoloImage,
    category: "Roupas",
    productDescription: "Camiseta polo 100% algodão preta básica",
  },
  {
    productId: 11,
    productName: "Calça",
    productPrice: 90.0,
    quantity: 0,
    imagePath: CalçaImage,
    category: "Roupas",
    productDescription: "Calça Jeans",
  },
  {
    productId: 12,
    productName: "Tênis",
    productPrice: 155.99,
    quantity: 0,
    imagePath: TenisImage,
    category: "Roupas",
    productDescription: "Tênis",
  },
  {
    productId: 13,
    productName: "Gibson SG Tony Iommi Signature",
    productPrice: 29999.99,
    quantity: 0,
    imagePath: Guitar02,
    category: "Instrumentos musicais",
    productDescription:
      "A Gibson Tony Iommi SG Custom é uma guitarra elétrica de edição especial projetada em homenagem ao lendário guitarrista Tony Iommi, da banda Black Sabbath. Com um visual impressionante, a guitarra apresenta uma deslumbrante pintura preta e se destaca por suas cruzes de posição nas escalas, em vez dos tradicionais marcadores de ponto ou trapézio. Essas cruzes refletem a estética sombria e icônica associada a Tony Iommi e ao som poderoso do Black Sabbath. Além disso, a guitarra é equipada com captadores Gibson humbucking que proporcionam um timbre poderoso e distinto, tarraxas Grover para estabilidade de afinação e um perfil de braço confortável para facilitar a execução. Com sua aparência única e som característico, a Gibson Tony Iommi SG Custom é uma escolha cobiçada por fãs e músicos que buscam recriar o icônico som do mestre do heavy metal.",
  },
  {
    productId: 14,
    productName: "Fender Telecaster Dragon Jimmy Page Signature",
    productPrice: 15599.99,
    quantity: 0,
    imagePath: Guitar01,
    category: "Instrumentos musicais",
    productDescription:
      "A Fender Jimmy Page Telecaster Dragon é uma guitarra elétrica de edição especial projetada em colaboração com o lendário guitarrista Jimmy Page, famoso por seu papel influente no Led Zeppelin. Esse instrumento único presta homenagem à icônica arte \"Dragon\" que Page pintou à mão em sua Telecaster original de 1959. A Fender recriou meticulosamente o intrincado design, replicando todos os detalhes dos padrões de escamas do dragão, suas cores e encanto. A guitarra possui um corpo de cinzas em duas peças, um braço de bordo personalizado em formato oval C e duas captadores Custom '59 single-coil para um som autêntico e vintage. Com sua aparência impressionante e excepcional habilidade de fabricação, a Fender Jimmy Page Telecaster Dragon não apenas representa uma notável homenagem a um músico icônico, mas também oferece aos músicos a oportunidade de canalizar o espírito atemporal e a magia da história do rock 'n roll.",
  },
  {
    productId: 15,
    productName: "Gibson Les Paul Snakepit Slash Edition",
    productPrice: 1999999.99,
    quantity: 0,
    imagePath: Guitar03,
    category: "Instrumentos musicais",
    productDescription:
      "A Gibson Les Paul Custom Shop Slash Snakepit é uma guitarra elétrica de edição especial projetada em colaboração com o lendário guitarrista Slash. Com detalhes personalizados de serpentes desenhadas no corpo e braço, essa guitarra apresenta uma estética única e impressionante, refletindo o estilo marcante de Slash. Fabricada com os mais altos padrões da Custom Shop da Gibson, a Snakepit oferece um corpo sólido em mogno e tampo em maple esculpido, resultando em um timbre rico e ressonante. Seus captadores humbucking de alta qualidade proporcionam um som poderoso e versátil, tornando-a uma peça de colecionador cobiçada por entusiastas da música e fãs de Slash em todo o mundo.",
  },
]);

import {atom} from 'jotai';

import VassouraImage from '../images/Vassoura.png';
import RodoImage from '../images/Rodo.png';
import VejaImage from '../images/Veja.webp';
import UAUImage from '../images/UAU.png';
import ZapImage from '../images/Zap.png';
import BombrilImage from '../images/Bombril.png';
import PinhoSolImage from '../images/PinhoSol.png';
import DetergenteImage from '../images/Detergente.png';

export const productsAtom = atom([
  {
    productId: 0,
    productName: 'Vassoura',
    productPrice: '19,99',
    quantity: 0,
    imagePath: VassouraImage
  },
  {
    productId: 1,
    productName: 'Rodo',
    productPrice: '12,99',
    quantity: 0,
    imagePath: RodoImage
  },
  {
    productId: 2,
    productName: 'Veja',
    productPrice: '6,99',
    quantity: 0,
    imagePath: VejaImage
  },
  {
    productId: 3,
    productName: 'UAU',
    productPrice: '3,99',
    quantity: 0,
    imagePath: UAUImage
  },
  {
    productId: 4,
    productName: 'Zap',
    productPrice: '6,99',
    quantity: 0,
    imagePath: ZapImage
  },
  {
    productId: 5,
    productName: 'Bombril',
    productPrice: '3,50',
    quantity: 0,
    imagePath: BombrilImage
  },
  {
    productId: 6,
    productName: 'Pinho Sol',
    productPrice: '29,99',
    quantity: 0,
    imagePath: PinhoSolImage
  },
  {
    productId: 7,
    productName: 'Detergente',
    productPrice: '6,00',
    quantity: 0,
    imagePath: DetergenteImage
  },
]);
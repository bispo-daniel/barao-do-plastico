import Card from '../../components/card/Card';
import { productsAtom } from '../../assets/products/Products'
import WPPICON from '../../assets/images/WPP-Icon.png';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Kart() {
  const [products, setProducts] = useAtom(productsAtom);
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const sendSelectedToWhatsApp = () => {
    const selectedProducts = products.filter((product) => product.quantity > 0);
    
    if( selectedProducts.length > 0) {
      let currentKart = '';
    
      selectedProducts.forEach((product) => {
        currentKart += `${product.quantity} unidade(s) de ${product.productName}%0A`;
      });
    
      const WhatsAppURL = `https://wa.me/5511918658056?text=Olá! Segue meu Carrinho:%0A${currentKart}`;
    
      window.open(WhatsAppURL);
    } else {
      setAlertIsOpen(true);
    }

  };  

  const hideButtonText = () => {
    const buttonText = document.getElementById('whatsappFixedButtonText')
    buttonText.style.display = 'none'
  }

  setTimeout(hideButtonText, 2000);

  const alertComponent = () => {
    setTimeout(() => {
      setAlertIsOpen(false);
    }, 3000);
  
    return (
      <div className="fixed z-50 right-2 top-6 w-[250px] px-2 bg-opacity-80 flex items-center h-fit border-2 border-red-600 text-white bg-red-600 rounded" role='alert'>
        Seu carrinho está está vazio. 
        <br/>
        Selecione seus produtos.
      </div>
    )
  }

  return (
    <main className="w-full max-w-[1240px] flex flex-col gap-5 items-center justify-center sm:flex-row sm:flex-wrap p-4">
      {products.map((product, key) => (
        <Card
          key={key}
          product={product}
        />
      ))}

      <button
        className="fixed w-fit gap-2 p-2 min-w-[60px] h-[60px] transition-all z-50 rounded-full right-3 sm:right-6 bottom-20 sm:bottom-10 flex items-center justify-center"
        style={{ backgroundColor: '#25D366' }}
        onClick={sendSelectedToWhatsApp}
      >
        <span id='whatsappFixedButtonText' className='text-white font-semibold font-xl'>Envie seu Carrinho no WhatsApp</span>
        <img src={WPPICON} alt="" className="w-[35px]" />
      </button>

      <button
        onClick={sendSelectedToWhatsApp}
        className="rounded p-2 w-[250px] mb-20 sm:m-4 flex items-center justify-around"
        style={{ backgroundColor: '#25D366' }}
      >
        <img src={WPPICON} alt="" className="w-[30px]" />
        <span className="text-gray-50 no-underline text-xl font-bold">Envie seu Carrinho</span>
      </button>

      {
        alertIsOpen && alertComponent()
      }
    </main>
  );
}
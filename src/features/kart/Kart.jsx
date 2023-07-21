import Card from "../../components/card/Card";
import { productsAtom } from "../../assets/products/Products";
import WPPICON from "../../assets/images/WPP-Icon.png";
import { useAtom } from "jotai";
import { useState } from "react";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { useEffect } from "react";

export default function Kart() {
  const [productsAtomValue] = useAtom(productsAtom);
  const [products, setProducts] = useState(productsAtomValue);

  useEffect(() => {
    setProducts(productsAtomValue);
  }, [productsAtomValue]);

  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const [productsCategories, setProductsCategories] = useState([]);

  useEffect(() => {
    const auxiliarArray = [...productsCategories];

    productsAtomValue.forEach((product) => {
      if (!auxiliarArray.includes(product.category)) {
        auxiliarArray.push(product.category);
      }
    });

    setProductsCategories(auxiliarArray);
  }, [productsAtomValue]);

  const descendingPrice = () => {
    const sorted = [...products].sort(
      (obj1, obj2) => obj2.productPrice - obj1.productPrice,
    );
    setProducts(sorted);
  };

  const ascendingPrice = () => {
    const sorted = [...products].sort(
      (obj1, obj2) => obj1.productPrice - obj2.productPrice,
    );
    setProducts(sorted);
  };

  const descendingName = () => {
    const sortedProducts = [...products].sort((obj1, obj2) =>
      obj2.productName.localeCompare(obj1.productName),
    );
    setProducts(sortedProducts);
  };

  const ascendingName = () => {
    const sortedProducts = [...products].sort((obj1, obj2) =>
      obj1.productName.localeCompare(obj2.productName),
    );
    setProducts(sortedProducts);
  };

  const filterProducts = (filterType) => {
    if (filterType === "Default") {
      setProducts(productsAtomValue);
    } else {
      const filteredProducts = productsAtomValue.filter((product) => {
        return product.category === filterType;
      });

      setProducts(filteredProducts);
    }
  };
  const sendSelectedToWhatsApp = () => {
    const selectedProducts = products.filter((product) => product.quantity > 0);

    if (selectedProducts.length > 0) {
      let currentKart = "";
      let total = 0;

      selectedProducts.forEach((product) => {
        currentKart += `${product.quantity} unidade(s) de ${product.productName}%0A`;
        total += product.productPrice * product.quantity;
      });

      let formatedTotal = total.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      const WhatsAppURL = `https://wa.me/5511918658056?text=Olá! Segue meu Carrinho:%0A%0A${currentKart}%0ASubtotal: R$ ${formatedTotal}`;

      window.open(WhatsAppURL);
    } else {
      setAlertIsOpen(true);
    }
  };

  const hideButtonText = () => {
    const buttonText = document.getElementById("whatsappFixedButtonText");
    buttonText.style.display = "none";
  };

  setTimeout(hideButtonText, 3000);

  const alertComponent = () => {
    setTimeout(() => {
      setAlertIsOpen(false);
    }, 3000);

    return (
      <div
        className="fixed z-50 left-3 sm:left-6 bottom-20 sm:bottom-10 uppercase w-[250px] bg-opacity-80 flex items-center justify-center h-[80px] border-2 border-red-600 text-white bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-lg"
        role="alert"
      >
        <p className="text-center m-0">
          Seu carrinho está vazio.
          <br />
          Adicione seus produtos.
        </p>
      </div>
    );
  };

  return (
    <main className="w-full max-w-[1240px] flex flex-col gap-4 md:gap-5 items-center justify-center sm:flex-row sm:flex-wrap p-4">
      <header className="w-[100%] h-[60px] rounded border-2 border-blue-600 dark:text-white flex items-center justify-between px-3">
        <div className="dropdown">
          <button
            className="flex items-center gap-1"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <SortRoundedIcon />
            Ordenar
          </button>
          <ul
            className="dropdown-menu dark:bg-[#3c3c3c] "
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <button
                className="dropdown-item dark:text-white hover:text-white hover:bg-blue-600"
                onClick={(e) => ascendingPrice(e)}
              >
                Preço Crescente
              </button>
            </li>
            <li>
              <button
                className="dropdown-item dark:text-white hover:text-white hover:bg-blue-600"
                onClick={(e) => descendingPrice(e)}
              >
                Preço Decrescente
              </button>
            </li>
            <li>
              <button
                className="dropdown-item dark:text-white hover:text-white hover:bg-blue-600"
                onClick={(e) => ascendingName(e)}
              >
                Nome Crescente
              </button>
            </li>
            <li>
              <button
                className="dropdown-item dark:text-white hover:text-white hover:bg-blue-600"
                onClick={(e) => descendingName(e)}
              >
                Nome Decrescente
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="flex items-center gap-1"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FilterListRoundedIcon />
            Filtrar
          </button>
          <ul
            className="dropdown-menu dark:bg-[#3c3c3c] dark:text-white max-w-[170px] truncate"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <button
                className="dropdown-item dark:text-white hover:text-white hover:bg-blue-600 truncate"
                onClick={() => filterProducts("Default")}
              >
                Todas categoriasssssss
              </button>
            </li>
            {productsCategories[0] &&
              productsCategories.map((productCategory, key) => (
                <li key={key}>
                  <button
                    className="dropdown-item dark:text-white hover:text-white hover:bg-blue-600 truncate"
                    onClick={() => filterProducts(productCategory)}
                  >
                    {productCategory}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </header>

      {products.map((product, key) => (
        <Card key={key} product={product} />
      ))}

      <button
        className="fixed bg-[#25D366] hover:bg-green-600 hover:shadow-2xl w-fit gap-2 p-2 min-w-[60px] h-[60px] transition-all z-50 rounded-full right-3 sm:right-6 bottom-20 sm:bottom-10 flex items-center justify-center"
        onClick={sendSelectedToWhatsApp}
      >
        <span
          id="whatsappFixedButtonText"
          className="text-white font-semibold font-xl"
        >
          Envie seu Carrinho no WhatsApp
        </span>
        <img src={WPPICON} alt="" className="w-[35px]" />
      </button>

      <div className="w-full flex justify-center">
        <button
          onClick={sendSelectedToWhatsApp}
          className="rounded p-2 w-[250px] mb-20 sm:m-4 flex items-center justify-around bg-[#25D366] hover:bg-green-600 hover:shadow-2xl"
        >
          <img src={WPPICON} alt="" className="w-[30px]" />
          <span className="text-gray-50 no-underline text-xl font-bold">
            Envie seu Carrinho
          </span>
        </button>
      </div>

      {alertIsOpen && alertComponent()}
    </main>
  );
}

import { useAtom } from "jotai";
import { productsAtom } from "../../assets/products/Products";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useState } from "react";
import { Tooltip } from "@mui/material";

export default function Card({ product }) {
  const {
    productId,
    productName,
    productPrice,
    imagePath,
    quantity,
    productDescription,
  } = product;

  let formatedPrice = productPrice.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const [products, setProducts] = useAtom(productsAtom);

  const increaseQuantity = () => {
    const updatedProducts = products.map((p) =>
      p.productId === productId ? { ...p, quantity: p.quantity + 1 } : p,
    );
    setProducts(updatedProducts);
  };

  const decreaseQuantity = () => {
    const updatedProducts = products.map((p) =>
      p.productId === productId
        ? { ...p, quantity: Math.max(p.quantity - 1, 0) }
        : p,
    );
    setProducts(updatedProducts);
  };

  const cardStyles = {
    width: "250px",
    border: "2px solid rgb(37 99 235 / var(--tw-border-opacity))",
    maxWidth: "250px",
    height: "365px",
    maxHeight: "365px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const [elementShowing, setElementShowing] = useState("image");

  const toggleElementShowing = () => {
    elementShowing === "image"
      ? setElementShowing("description")
      : setElementShowing("image");
  };

  return (
    <div
      className="card bg-[#f1f1f1] dark:bg-[#313131] dark:text-white hover:shadow-2xl hover:scale-105 transition"
      style={cardStyles}
    >
      <div className="w-[250px] min-h-[250px] flex items-center justify-center ">
        {elementShowing === "description" ? (
          <button
            onClick={toggleElementShowing}
            className="absolute left-1 top-[30%] rounded-full w-[25px] h-[25px] bg-[#FF50B0]  flex items-center justify-center hover:bg-[#ff8aca]"
          >
            <KeyboardArrowLeftRoundedIcon color="secondary" />
          </button>
        ) : (
          <button
            onClick={toggleElementShowing}
            className="absolute right-1 top-[30%] rounded-full w-[25px] h-[25px] bg-[#FF50B0] flex items-center justify-center hover:bg-[#ff8aca]"
          >
            <KeyboardArrowRightRoundedIcon color="secondary" />
          </button>
        )}

        {elementShowing === "description" ? (
          <p className="w-[98%] h-[250px] mb-0 pl-2 pt-2 overflow-y-scroll text-gray-800 dark:text-white font-medium leading-relaxed text-sm ">
            {productDescription}
          </p>
        ) : (
          <img
            src={imagePath}
            className="card-img-top pointer-events-none max-h-[250px] w-full p-1"
            alt="..."
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      <hr className="w-full m-[0px] opacity-100 border-[#29D0C0]" />

      <div className="card-body flex flex-col items-center justify-around p-0 pb-2">
        <h5 className="card-title flex flex-col pb-2">
          <span className="max-w-[220px] truncate">{productName}</span>

          <span className="max-w-[220px] truncate">R$ {formatedPrice}</span>
        </h5>

        <div className="flex">
          <Tooltip arrow title="Diminuir">
            <button
              onClick={decreaseQuantity}
              className="h-[25x] w-[35px] bg-[#FF50B0] rounded-l-full hover:bg-[#ff8aca]"
            >
              <KeyboardArrowLeftRoundedIcon color="secondary" />
            </button>
          </Tooltip>
          <Tooltip arrow title="Quantidade">
            <span className="w-[33px] text-center border-y-2 border-[#FF50B0] text-xl font-medium">
              {quantity}
            </span>
          </Tooltip>
          <Tooltip arrow title="Aumentar">
            <button
              onClick={increaseQuantity}
              className="h-[25x] w-[35px] bg-[#FF50B0] rounded-r-full hover:bg-[#ff8aca]"
            >
              <KeyboardArrowRightRoundedIcon color="secondary" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

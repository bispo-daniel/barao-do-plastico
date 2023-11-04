import { CloseRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useAtom } from "jotai";
import { displayFullSizeImage, productFullSize } from "@/store";

export default function FullSizeImage() {
  const [productAtom] = useAtom(productFullSize);
  console.log("productAtom");
  console.log(productAtom);
  const { productName, productPrice, imagePath } = productAtom;

  const [displayFullSizeImageAtom, setDisplayFullSizeImageAtom] =
    useAtom(displayFullSizeImage);

  const toggleDisplayFullSizeImageAtom = () => {
    displayFullSizeImageAtom
      ? setDisplayFullSizeImageAtom(false)
      : setDisplayFullSizeImageAtom(true);
  };

  let formattedPrice = productPrice.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return (
    <div className="z-[999] fixed w-screen h-screen flex items-center justify-center bg-[#000000aa] overflow-hidden">
      <div className="z-[1000] rounded w-[90%] h-[90%] max-h-[400px] sm:max-h-[600px] max-w-[600px] bg-[#f1f1f1] dark:bg-[#313131] p-2">
        <header className="w-full flex items-center justify-between px-2 border-b mb-2 border-[#29D0C0]">
          <h6 className="text-gray-800 dark:text-[#fff] font-sans">{`${productName} - ${formattedPrice}`}</h6>
          <IconButton
            color="secondary"
            aria-label="cancel"
            onClick={() => toggleDisplayFullSizeImageAtom()}
          >
            <CloseRounded className="text-gray-800 dark:text-[#fff]" />
          </IconButton>
        </header>
        <img src={imagePath} className="w-full h-full" />
      </div>
    </div>
  );
}

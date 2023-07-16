import { useAtom } from 'jotai';
import { productsAtom } from '../../assets/products/Products';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

export default function Card({ product }) {
  const { productId, productName, productPrice, imagePath, quantity } = product;

  const [products, setProducts] = useAtom(productsAtom);

  const increaseQuantity = () => {
    const updatedProducts = products.map((p) =>
      p.productId === productId ? { ...p, quantity: p.quantity + 1 } : p
    );
    setProducts(updatedProducts);
  };

  const decreaseQuantity = () => {
    const updatedProducts = products.map((p) =>
      p.productId === productId ? { ...p, quantity: Math.max(p.quantity - 1, 0) } : p
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="card border-blue-400" style={{ width: '250px', border: '1px solid rgb(96 165 250 / var(--tw-border-opacity))', maxWidth: '250px', height: '315px', maxHeight: '315px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div className='w-[220px] h-[220px] flex items-end'>
        <img src={imagePath} className="card-img-top" alt="..." style={{ width: '220px' }} />
      </div>

      <div className="card-body flex flex-col items-center">
        <h5 className="card-title">{productName} - R$ {productPrice}</h5>

        <div className="flex">
          <button onClick={decreaseQuantity} className="h-[25x] w-[35px] bg-blue-400 rounded-l-full">
            <KeyboardArrowLeftRoundedIcon/>
          </button>
          <span className="w-[33px] text-center border-y-2 border-blue-400 text-xl font-medium">{quantity}</span>
          <button onClick={increaseQuantity} className="h-[25x] w-[35px] bg-blue-400 rounded-r-full">
            <KeyboardArrowRightRoundedIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}

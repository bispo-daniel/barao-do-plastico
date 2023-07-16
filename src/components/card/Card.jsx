import { useAtom } from 'jotai';
import { productsAtom } from '../../assets/products/Products';

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
    <div className="card" style={{ width: '250px', maxWidth: '250px', height: '315px', maxHeight: '315px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div className='w-[220px] h-[220px] flex items-end'>
        <img src={imagePath} className="card-img-top" alt="..." style={{ width: '220px' }} />
      </div>

      <div className="card-body flex flex-col items-center">
        <h5 className="card-title">{productName} - R$ {productPrice}</h5>

        <div className="flex">
          <button onClick={decreaseQuantity} className="h-[25x] w-[35px] bg-orange-400 rounded-l-full">&lt;</button>
          <span className="w-[30px] text-center border-y-2 border-orange-400">{quantity}</span>
          <button onClick={increaseQuantity} className="h-[25x] w-[35px] bg-orange-400 rounded-r-full">&gt;</button>
        </div>
      </div>
    </div>
  )
}

import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const location = useLocation()

  return (
    <header className="w-full max-w-[1280px] h-[60px] sm:h-[50px] border-b-2 rounded-t sm:rounded-t-none sm:rounded-b border-blue-600 bg-blue-600 flex items-center justify-center bottom-0 sm:justify-between sm:px-10 fixed z-50 sm:top-0 sm:relative">
      <div className="hidden sm:block text-white font-bold hover:text-gray-200 hover:cursor-pointer uppercase">
        Barão do Plástico
      </div>

      <div className="w-full flex justify-around sm:w-[350px] text-bold">
        <button className={`${location.pathname === '/' ? 'bg-blue-700' : 'bg-blue-600'} border-white border-2 rounded px-2 py-1 w-[150px] hover:bg-blue-700 hover:scale-105 transition`}>
          <Link to="/" className='no-underline'>
            <span className="text-white flex items-center justify-around">
              <ShoppingCartRoundedIcon />
              CARRINHO
            </span>
          </Link>
        </button>
        <button className={`${location.pathname === '/contacts' ? 'bg-blue-700' : 'bg-blue-600'} border-white border-2 rounded px-2 py-1 w-[150px] hover:bg-blue-700 hover:scale-105 transition`}>
          <Link to='/contacts' className='no-underline'>
            <span className="text-white flex items-center justify-around">
              <PersonRoundedIcon />
              CONTATOS
            </span>
          </Link>
        </button>
      </div>
    </header>
  );
}
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png"

export default function Header() {
  const location = useLocation();

  return (
    <header className="w-full max-w-[1280px] h-[60px] sm:h-[50px] border-t sm:border-t-0 sm:border-b rounded-t sm:rounded-t-none border-x sm:rounded-b border-[#FF50B0] bg-black flex items-center justify-center bottom-0 sm:justify-between sm:px-10 fixed z-50 sm:top-0 sm:relative">
      <Link to="/" className="no-underline text-white">
        <img src={Logo} alt="" className="h-[60px] sm:h-[50px] pointer-events-none hidden sm:block"/>
      </Link>

      <div className="w-full flex justify-around sm:w-[350px] text-bold">
        <button
          className={`${
            location.pathname === "/" ? "bg-[#ff8aca]" : "bg-[#FF50B0]"
          } border-white border rounded px-2 py-1 w-[150px] hover:bg-[#ff8aca] hover:scale-105 transition`}
        >
          <Link to="/" className="no-underline">
            <span className="text-white flex items-center justify-around">
              <ShoppingCartRoundedIcon />
              CARRINHO
            </span>
          </Link>
        </button>
        <button
          className={`${
            location.pathname === "/contacts" ? "bg-[#ff8aca]" : "bg-[#FF50B0]"
          } border-white border rounded px-2 py-1 w-[150px] hover:bg-[#ff8aca] hover:scale-105 transition`}
        >
          <Link to="/contacts" className="no-underline">
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

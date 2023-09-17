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

      <div className="w-full flex justify-center sm:w-fit text-bold">
        <button
          className={`${
            location.pathname === "/" ? "border-b-2 sm:border-b-0 sm:border-t border-[#ff8aca]" : "sm:border-b-0 sm:border-t-0"
          } px-1 py-1 h-[60px] sm:h-[50px] w-[130px] hover:bg-[#ff8aca] transition`}
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
            location.pathname === "/contacts" ? "border-b-2 sm:border-b-0 sm:border-t border-[#ff8aca]" : "sm:border-b-0 sm:border-t-0"
          } px-1 py-1 h-[60px] sm:h-[50px] w-[130px] hover:bg-[#ff8aca] transition`}
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

import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export default function Header() {
  return (
    <header className="w-full max-w-[1280px] h-[50px] border-b-2 rounded-t sm:rounded-t-none sm:rounded-b border-blue-400 bg-blue-400 flex items-center justify-center bottom-0 sm:justify-between sm:px-10 fixed z-50 sm:top-0 sm:relative">
     
      <div className="hidden sm:block text-white">
        LOGO
      </div>

      <div className="w-full flex justify-around sm:w-[350px]">
        <button className='bg-blue-400 border-white border-2 rounded px-2 py-1 w-[150px]'>
          <a href="/" className='no-underline text-white flex items-center justify-around text-bold'>
            <StoreRoundedIcon/>
            CARRINHO
          </a>
        </button>
        <button className='bg-blue-400 border-white border-2 rounded px-2 py-1 w-[150px]'>
          <a href="/contacts" className='no-underline text-white flex items-center justify-around text-bold'>
            <PersonRoundedIcon/>
            CONTATOS
          </a>
        </button>
      </div>

    </header >
  )
}

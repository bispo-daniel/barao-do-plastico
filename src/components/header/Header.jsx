export default function Header() {
  return (
    <header className="w-full max-w-[1280px] h-[50px] border-b-2 rounded-t sm:rounded-t-none sm:rounded-b border-yellow-300 bg-yellow-300 flex items-center justify-center bottom-0 sm:justify-between sm:px-10 fixed z-50 sm:top-0 sm:relative">
     
      <div className="hidden sm:block">
        LOGO
      </div>

      <div className="w-full flex justify-between px-10 sm:w-[270px]">
        <button className='bg-black'>
          <a href="/" className='no-underline text-orange-500'>CARRINHO</a>
        </button>
        <button className='bg-black'>
          <a href="/contacts" className='no-underline text-orange-500'>CONTATOS</a>
        </button>
      </div>

      <div className="hidden sm:block">
        ICONS
      </div>

    </header >
  )
}

import Image from "next/image";
import Link from "next/link";
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href='/'>
          <Image
            className=""
            src={logo}
            alt="Logo Toro Investimentos"
          />
        </Link>
      </div>

      <div className="hidden: md:inline-flex items-center space-x-14">
          <h3 className="transition duration-150 uppercase text-sm font-medium hover:text-gray-400 cursor-pointer">Bolsa</h3>
          <h3 className="transition duration-150 uppercase text-sm font-medium hover:text-gray-400 cursor-pointer">Mais investimentos</h3>
          <h3 className="transition duration-150 uppercase text-sm font-medium hover:text-gray-400 cursor-pointer">Aprenda</h3>
          <h3 className="transition duration-150 uppercase text-sm font-medium hover:text-gray-400 cursor-pointer">Plataformas</h3>
          <h3 className="transition duration-150 uppercase text-sm font-medium hover:text-gray-400 cursor-pointer">Ajuda</h3>
        </div>
        <div className="flex items-center space-x-5">
          <button className="transition ease-in duration-150 px-4 py-2 border-2 border-primary rounded text-primary text-sm font-medium hover:text-white hover:bg-primary">Entrar</button>
          <button className="transition ease-in duration-150 px-4 py-2 border-2 border-primary rounded text-primary text-sm font-medium hover:text-white hover:bg-primary">Cadastre-se</button>
        </div>
    </header>
  )
}

export default Header;
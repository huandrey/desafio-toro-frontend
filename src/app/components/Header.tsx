import { Button, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BellSimple, List } from "phosphor-react";
import { useRef } from "react";
import logo from '../../../assets/logo.svg';
import {Drawer} from './';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  const authenticated = true;
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef}/>
      <div className="flex items-center space-x-5 cursor-pointer">
        <Link href='/'>
          <Image
            className=""
            src={logo}
            alt="Logo Toro Investimentos"
          />
        </Link>
      </div>

      <div className="hidden lg:inline-flex items-center space-x-14">
          <h3 className="transition duration-150 uppercase text-sm font-medium hover:text-gray-400 cursor-pointer">Bolsa</h3>
          <h3 className="transition duration-150 uppercase text-sm font-medium hover:text-gray-400 cursor-pointer">Mais investimentos</h3>
          <h3 className="transition duration-150 uppercase text-sm font-medium hover:text-gray-400 cursor-pointer">Aprenda</h3>
          <h3 className="transition duration-150 uppercase text-sm font-medium hover:text-gray-400 cursor-pointer">Plataformas</h3>
          <h3 className="transition duration-150 uppercase text-sm font-medium hover:text-gray-400 cursor-pointer">Ajuda</h3>
        </div>
        
        <div className="flex items-center space-x-5">
          { !authenticated ? (
              <>
              <button className="transition ease-in duration-150 px-4 py-2 border-2 border-primary rounded text-primary text-sm font-medium hover:text-white hover:bg-primary">Entrar</button>
              <button className="transition ease-in duration-150 px-4 py-2 border-2 border-primary rounded text-primary text-sm font-medium hover:text-white hover:bg-primary">Cadastre-se</button>
            </>
          ) : (
            <>
              <BellSimple size={24} className="cursor-pointer" color="#111" weight="light" />
              <h1 className="font-medium">Fulano</h1>
              <Button ref={btnRef}  onClick={onOpen}>
                <List size={28} className="cursor-pointer" color="#111" weight="light" />
              </Button>
            </>
          ) }
        </div>
    </header>
  )
}

export default Header;
import React, { useContext, useRef } from 'react';
import { Button as ButtonChakraUi, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/logo.svg';
import { Drawer, Button } from '../../components';
import { Bell, Hamburger } from '../../components/Icon';
import { Ancora } from '../../components/Typography';
import { AuthContext } from '../../../core/context/AuthContext';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const { user, isAuthenticated } = useContext(AuthContext);

  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <Drawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        btnRef={btnRef}
      />
      <div className="flex items-center space-x-5 cursor-pointer">
        <Link href="/">
          <Image className="" src={logo} alt="Logo Toro Investimentos" />
        </Link>
      </div>

      <div className="hidden lg:inline-flex items-center space-x-14">
        {['Bolsa', 'Mais Investimentos', 'Aprenda', 'Plataformas', 'Ajuda'].map(
          (val) => (
            <Ancora key={val} variant="mixed" type="ancora">
              {val}
            </Ancora>
          ),
        )}
      </div>

      <div className="flex items-center space-x-5">
        {!isAuthenticated ? (
          <>
            <Link href="/signin">
              <Button variant="mixed">Entrar</Button>
            </Link>
            <Link href="/signup">
              <Button variant="mixed">Cadastre-se</Button>
            </Link>
          </>
        ) : (
          <>
            <Bell />
            <h1 className="font-medium">{user?.first_name}</h1>
            <ButtonChakraUi ref={btnRef} onClick={onOpen}>
              <Hamburger />
            </ButtonChakraUi>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

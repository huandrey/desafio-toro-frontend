/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Button,
} from '@chakra-ui/react';
import { drawerConstants } from '../../core/constants';
import { Subtitle } from './Typography';
import { AuthContext } from '../../core/context/AuthContext';

function DrawerCustom({
  isOpen, onClose, btnRef,
}: any) {
  const { user, logout } = useContext(AuthContext);

  function endSession() {
    onClose();
    logout();
  }

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="sm"
    >
      <DrawerOverlay />
      <DrawerContent py={6} px={6}>
        <DrawerCloseButton size="lg" my={7} mx={6} />
        <DrawerHeader>{`Olá, ${user?.first_name}!`}</DrawerHeader>
        <br />
        <DrawerBody>
          {drawerConstants.map((val) => (
            <div key={val}>
              <Subtitle type="h5">{val !== 'br' && val}</Subtitle>
              {val === 'br' && (
                <>
                  <Divider orientation="horizontal" py={3} />
                  <br />
                </>
              )}
            </div>
          ))}
          <Button onClick={endSession}>Sair</Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerCustom;

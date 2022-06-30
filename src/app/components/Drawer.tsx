import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
} from '@chakra-ui/react';
import { drawerConstants } from '../../core/constants';
import { Subtitle } from './Typography';

function DrawerCustom({
  isOpen, onClose, btnRef,
}: any) {
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
        <DrawerHeader>Olá, Fulano</DrawerHeader>
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerCustom;

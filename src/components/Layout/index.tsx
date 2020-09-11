import React from 'react';

import { Container, Wrapper } from './styles';

import FloatingButton from '../FloatingButton';
import Main from '../Main';
import MenuBar from '../MenuBar';
import SideBar from '../SideBar';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
        <FloatingButton />
      </Wrapper>
    </Container>
  );
};

export default Layout;

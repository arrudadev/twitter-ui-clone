import React from 'react';

import { Container, AddTweetIcon } from './styles';

import Button from '../Button';

const FloatingButton: React.FC = () => {
  return (
    <Container>
      <Button>
        <AddTweetIcon />
      </Button>
    </Container>
  );
};

export default FloatingButton;

import React from 'react';

import { Container, TabStrip, Tab } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <TabStrip>
        <Tab className="active">Tweets</Tab>
        <Tab>Tweets e respostas</Tab>
        <Tab>Mídia</Tab>
        <Tab>Curtidas</Tab>
      </TabStrip>
    </Container>
  );
};

export default Feed;

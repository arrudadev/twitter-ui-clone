import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion
              name="Alexandre Monteiro"
              nickname="@monteiroalexandre"
            />,
            <FollowSuggestion
              name="Alexandre Monteiro"
              nickname="@monteiroalexandre"
            />,
            <FollowSuggestion
              name="Alexandre Monteiro"
              nickname="@monteiroalexandre"
            />,
          ]}
        />

        <List
          title="Talvez você curta"
          elements={[<h1>teste</h1>, <h1>teste</h1>, <h1>teste</h1>]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;

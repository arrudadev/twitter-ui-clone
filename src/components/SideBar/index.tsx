import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
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
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;

import styled from 'styled-components';

import { AddTweet } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  > button {
    border-radius: 50%;
  }

  @media (max-width: 500px) {
    display: inline-block;

    position: fixed;
    bottom: 60px;
    right: 20px;
  }
`;

export const AddTweetIcon = styled(AddTweet)`
  width: 25px;
  height: 25px;

  color: var(--white);
  fill: var(--white);

  position: relative;
  top: 2px;
`;

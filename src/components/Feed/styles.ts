import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabStrip = styled.div`
  display: flex;
  margin-top: 10px;

  border-bottom: 2px solid var(--outline);
`;

export const Tab = styled.div`
  text-align: center;

  flex-grow: 1;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--gray);

  padding: 15px;

  &.active {
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);
  }

  &:hover {
    color: var(--twitter);
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;

  @media (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

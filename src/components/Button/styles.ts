import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  border: 0;
  width: 100%;
  height: 56px;
  color: #312e38;
  padding: 0 16px;
  font-weight: 500;
  margin-top: 16px;
  background: #ff9000;
  border-radius: 10px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

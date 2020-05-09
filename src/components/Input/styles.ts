import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 16px;
  color: #666360;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  /* Focus input selected */
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  /* Blur input */
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  /* icone */

  svg {
    margin-right: 16px;
  }
`;

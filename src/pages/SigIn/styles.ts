import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/img/sign-in-background.png';

export const Container = styled.div`
  height: 100vh; /* 100% da tela */
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  max-width: 700px;
  flex-direction: column;
  place-content: center;
  align-items: center;

  form {
    width: 340px;
    margin-top: 80px 0;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      padding: 16px;
      color: #f4ede8;
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
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
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /* form href */

  > a {
    color: #ff9000;
    display: flex;
    margin-top: 24px;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background-size: cover;
  background: url(${signInBackgroundImg}) no-repeat center;
`;

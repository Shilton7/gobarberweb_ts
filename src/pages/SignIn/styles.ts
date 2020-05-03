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
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

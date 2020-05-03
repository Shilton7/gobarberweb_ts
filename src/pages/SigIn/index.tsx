import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/img/logo.svg';

const SigIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="Gobarber" />

        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="email" />
          <input type="password" placeholder="senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="creat">
          <FiLogIn size={20} />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SigIn;

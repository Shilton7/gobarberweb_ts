import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/img/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SigIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="Gobarber" />

        <form>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name="email" placeholder="email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="senha"
          />

          <Button type="submit">Entrar</Button>

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

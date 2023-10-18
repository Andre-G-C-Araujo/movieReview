import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";

export const SignUp = () => {
  return (
    <Container>
      <Background />
      <Form>
        <div>
          <h1>Movies Reviews</h1>
          <p>Aplicação para ver feedback de filmes</p>
        </div>
        <h2>Crie sua conta</h2>
        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="Digite seu Email" icon={FiMail} />
        <Input type="password" placeholder="Digite sua Senha" icon={FiLock} />

        <Button title="Criar conta" classname={"futuramente um link"} />
        <a href="#"> Voltar para login </a>
      </Form>
    </Container>
  );
};
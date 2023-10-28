import { FiMail, FiLock, FiKey } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <Container>
      <Form>
        <div>
          <h1>Movies Reviews</h1>
          <p>Aplicação para ver feedback de filmes</p>
        </div>
        <h2>Faça seu login</h2>
        <Input type="text" placeholder="Digite seu Email" icon={FiMail} />
        <Input type="password" placeholder="Digite sua Senha" icon={FiLock} />

        <Button title="Entrar" classname={"futuramente um link"} icon={FiKey} />
        <Link to="/register"> Crie sua conta </Link>
      </Form>
      <Background />
    </Container>
  );
};

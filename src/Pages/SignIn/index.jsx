import { FiMail, FiLock, FiKey } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <div>
          <h1>Movies Reviews</h1>
          <p>Aplicação para ver feedback de filmes</p>
        </div>
        <h2>Faça seu login</h2>
        <Input
          type="text"
          placeholder="Digite seu Email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="buttonsBottom">
          <Button
            title="Entrar"
            classname={"futuramente um link"}
            icon={FiKey}
            onClick={handleSignIn}
          />
          <Link to="/register"> Crie sua conta </Link>
        </div>
      </Form>
      <Background />
    </Container>
  );
};

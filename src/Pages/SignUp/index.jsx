import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser, FiUserCheck } from "react-icons/fi";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log(name, email, password);

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => alert("Conta criada com SUCESSO!"))
      .catch(() => alert("Usuário não cadastrado!"));

    navigate("/");
  };

  return (
    <Container>
      <Background />
      <Form>
        <div>
          <h1>Movies Reviews</h1>
          <p>Aplicação para ver feedback de filmes</p>
        </div>
        <h2>Crie sua conta</h2>
        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
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

        <Button
          title="Criar conta"
          classname={"futuramente um link"}
          icon={FiUserCheck}
          onClick={handleSignUp}
        />
        <Link to="/"> Voltar para login </Link>
      </Form>
    </Container>
  );
};

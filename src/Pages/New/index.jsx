import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { FiSend } from "react-icons/fi";

export const New = () => {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <h1>Criar nota</h1>
          <Link to="/">voltar</Link>
        </header>

        <Form>
          <Input placeholder="Título" bgNote="bgNote" />
          <Textarea placeholder="Descrava as informações" isOnNote />

          <Section title="Links úteis">
            <NoteItem value="https://google.com.br" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>

          <Section title="Marcadores">
            <NoteItem value="React" classname="NoteTag" />
            <NoteItem isNew placeholder="Nova Tag" />
          </Section>

          <Button title="Enviar" icon={FiSend} link={"/"} />
        </Form>
      </main>
    </Container>
  );
};

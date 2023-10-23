import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

export const New = () => {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <h1>Criar nota</h1>
          <a href="https://google.com.br">voltar</a>
        </header>

        <Form>
          <Input placeholder="Título" />
          <Textarea placeholder="Descrava as informações" />

          <Section title="Links úteis">
            <NoteItem value="https://google.com.br" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>

          <Section title="Marcadores">
            <NoteItem value="React" />
            <NoteItem isNew placeholder="Nova Tag" />
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
};

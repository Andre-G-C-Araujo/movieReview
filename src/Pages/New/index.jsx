import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

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
          <textarea />

          <Section title="Links úteis">
            <Input />
            <Input />
          </Section>

          <Section title="Marcadores">
            <Tag title="Movies" />
            <Tag title="Actors" />
          </Section>
        </Form>
      </main>
    </Container>
  );
};

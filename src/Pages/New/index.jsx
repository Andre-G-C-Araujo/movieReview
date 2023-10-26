import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Tag } from "../../components/Tag";
import { FiArrowLeft, FiX } from "react-icons/fi";

export const New = () => {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
          <h1>Criar nota</h1>
        </header>

        <Form>
          <div>
            <Input placeholder="Título" bgNote="bgNote" />
            <Input placeholder="Sua nota de (0 a 5)" bgNote="bgNote" />
          </div>

          <Textarea placeholder="Observações" isonnote={false} />
        </Form>
        <Section title="Marcadores">
          <div>
            {/* Parei aqui */}
            <Tag title="Ficção" />
            <Tag title="Drama" isnew="true" />
          </div>
        </Section>
      </main>
    </Container>
  );
};

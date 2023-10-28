import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { TagIcon } from "../../components/TagIcon";
import { FiArrowLeft, FiTrash, FiSave } from "react-icons/fi";

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
          <h2>Novo Filme</h2>
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
            <TagIcon title="Ficção" />
            <TagIcon title="Drama" isnew="true" />
          </div>
        </Section>

        <div className="footerButtons">
          <Button title="Excluir" icon={FiTrash} />
          <Button title={"Salvar"} icon={FiSave} />
        </div>
      </main>
    </Container>
  );
};

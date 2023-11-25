import { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";

import { FiArrowLeft, FiTrash, FiSave } from "react-icons/fi";

export const New = () => {
  const [title, setTitle] = useState();
  const [rating, setRating] = useState("0");
  const [textAreaContent, setTextAreaContent] = useState("");

  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  //passando como parametro quem vai ser deletado
  function handleRemoveLink(deleted) {
    //retorna uma nova lista sem o link que foi deletado.
    //link !== deleted vai retornar false no que foi deletado(clicado) e retorna o resto
    setTags((prevState) => prevState.filter((link) => link !== deleted));
  }

  async function handleCreateNote() {
    const checkIsNumber = Number(rating);

    console.log(checkIsNumber);

    if (!title) {
      return alert("Precisa preencher o título!");
    }

    if (isNaN(checkIsNumber)) {
      return alert("Campo rating precisa ser um digito.");
    }

    if (checkIsNumber < 0 || checkIsNumber > 5) {
      return alert("Rating precisa ser um numero de 1 a 5");
    }
    if (!textAreaContent) {
      return alert("Precisa preencher uma descrição!");
    }

    if (tags.length === 0 && !newTag) {
      return alert("Precisa preencher pelo menos 1 (uma) tag!");
    }
    if (newTag) {
      return alert("Campo preenchido mas não foi adicionado!");
    }

    await api.post("/movies_notes", {
      title,
      rating,
      description: textAreaContent,
      movies_tags: tags,
    });
    alert("Nota criada com sucesso!");
    navigate("/");
  }

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
            <Input
              placeholder="Título"
              bgNote="bgNote"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Input
              placeholder="Sua nota de (0 a 5)"
              bgNote="bgNote"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
          </div>

          <Textarea
            placeholder="Observações"
            isonnote={false}
            onChange={(e) => {
              setTextAreaContent(e.target.value);
            }}
          />
        </Form>
        <Section title="Marcadores">
          <div>
            {tags.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              placeholder="Nova Tag"
              isnew="true"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddLink}
            />
          </div>
        </Section>

        <div className="footerButtons">
          <Button
            title="Excluir"
            icon={FiTrash}
            onClick={() => window.location.reload()}
          />
          <Button title={"Salvar"} icon={FiSave} onClick={handleCreateNote} />
        </div>
      </main>
    </Container>
  );
};

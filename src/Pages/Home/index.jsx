import { useState, useEffect } from "react";
import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem";
import { api } from "../../services/api";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const navigate = useNavigate();

  const notesMapForSearch = notes.map((note) => note.title);
  const notesFilteredByLetter = notesMapForSearch.filter((letter) =>
    letter.includes(search)
  );

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleNameTag(tagName) {
    console.log(notesFilteredByLetter);

    setSelectedTags([]);

    if (tagName) {
      const verifyTag = tags.filter((tag) => tag.name.includes(tagName)); // retorn a tag de acordo com o filtro {estrutura intera}
      const searchedTag = verifyTag.map((tag) => tag.name); // retornando o nome da tag de acordo com o filtro

      setSelectedTags(searchedTag);
    } else {
      setSelectedTags((prevState) => [...prevState, tagName]);
    }
  }
  useEffect(() => {
    handleNameTag(search);
  }, [search]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/movies_tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      if (notesFilteredByLetter.length === 0) {
        const response = await api.get(
          `/movies_notes?title&movies_tags=${selectedTags}`
        );
        setNotes(response.data);
      } else {
        const response = await api.get(
          `/movies_notes?title=${search}&movies_tags`
        );

        setNotes(response.data);
      }
    }

    fetchNotes();
  }, [selectedTags, search]);
  return (
    <Container>
      <Header setSearch={setSearch} />

      <main>
        <header>
          <h2>Meus Filmes</h2>

          <Button title="Adicionar filme" icon={FiPlus} link="/new" />
        </header>

        <Section>
          {notes.map((note) => (
            <MovieItem
              key={String(note.id)}
              title={note.title}
              rating={Number(note.rating)}
              description={note.description}
              tags={note.movies_tags}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Section>
      </main>
    </Container>
  );
};

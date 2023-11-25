import { useState, useEffect } from "react";
import { Container } from "./styles";

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

  function handleNameTag(tagName) {
    console.log(tags);
    console.log(search);

    if (tagName) {
      const searchTag = tags.map((tag) => tag);
      const filteredTag = searchTag.filter((tag) => tag !== tagName);

      console.log(filteredTag);
      setSelectedTags(filteredTag);
    } else {
      setSelectedTags((prev) => [...prev, tagName]);
    }

    //Precisa pega valor do input
    //precisa verificar se o valor do input bate com o array.
    // retornar item que bate

    setSelectedTags(tagName);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/movies_tags");

      // const filterTag = tags.data.filter((item) => {
      //   item.name === search ? setTags(item) : console.log("deu errado");
      // });
      const mapedTags = response.data.map((item) => item.name);
      // const filterdTags = mapedTags.map((item) => item.split(""));

      setTags(mapedTags);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/movies_notes?title=${search}&movies_tags=${selectedTags}`
      );

      setNotes(response.data);
      handleNameTag(search);
    }

    fetchNotes();
  }, [search, selectedTags]);
  return (
    <Container>
      <Header setSearch={setSearch} />

      <main>
        <header>
          <h2>Meus Filmes</h2>

          <Button title="Adicionar filme" icon={FiPlus} link="/new" />
        </header>

        <Section>
          {notes.map((note, index) => (
            <MovieItem
              key={index}
              title={note.title}
              rating={Number(note.rating)}
              description={note.description}
              tags={note.movies_tags}
            />
          ))}
        </Section>
      </main>
    </Container>
  );
};

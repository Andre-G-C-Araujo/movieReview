import { Container } from "./styles";

import { FiSearch, FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem";
import { useAuth } from "../../hooks/auth";

export const Home = () => {
  const { user, getInfoNotes } = useAuth();
  const { title, rating, description, movies_tags } = getInfoNotes();
  console.log(user, title);

  return (
    <Container>
      <Header />

      <main>
        <header>
          <h2>Meus Filmes</h2>

          <Button title="Adicionar filme" icon={FiPlus} link="/new" />
        </header>

        <Section>
          <MovieItem title="Interception" />
          {/* <MovieItem title="Catch me if you can" />
          <MovieItem title="The all powerfull" />
          <MovieItem title="Pirates of Cariben" />
          <MovieItem title="Interception 2" />
          <MovieItem title="Catch me if you can once again" />
          <MovieItem title="The all powerfull, and the mightness" />
          <MovieItem title="Pirates of Cariben 2 chest man heart" />
          <MovieItem title="ceptionInter" />
          <MovieItem title="Catch me if you can, but you never ll" />
          <MovieItem title="The all lesspowerfull" />
          <MovieItem title="Pirates of Cariben 3 the black pearl" /> */}
        </Section>
      </main>
    </Container>
  );
};

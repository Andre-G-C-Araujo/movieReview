import { Container, Brand, Newnote, Menu, Search, Content } from "./styles";

import { FiSearch, FiPlus } from "react-icons/fi";

import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

export const Home = () => {
  return (
    <Container>
      <Brand>
        <h1>MoviesReviews</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText title="O todo poderoso" />
        </li>
        <li>
          <ButtonText title="Mortal Kombat" isActive />
        </li>
        <li>
          <ButtonText title="Batman" />
        </li>
        <li>
          <ButtonText title="The Flash" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar por filme" icon={FiSearch} />
      </Search>
      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "Mortal Kombat",
              tags: [
                { id: "1", name: "Mortal Kombat" },
                { id: "2", name: "Scorpion" },
                { id: "3", name: "Sub-Zero" },
                { id: "4", name: "Shao Kanh" },
                { id: "5", name: "Lyu Kang" },
              ],
            }}
          />
          <Note
            data={{
              title: "O todo poderoso",
              tags: [
                { id: "1", name: "Jim carrey" },
                { id: "2", name: "Morgan Freeman" },
              ],
            }}
          />
          <Note
            data={{
              title: "Batman",
              tags: [
                { id: "1", name: "Bruce aWayne" },
                { id: "2", name: "Ben affler" },
                { id: "3", name: "Cristian Baillet" },
              ],
            }}
          />
        </Section>
      </Content>
      <Newnote>
        New Note
        <FiPlus size={30} className="plusButton" />
      </Newnote>
    </Container>
  );
};

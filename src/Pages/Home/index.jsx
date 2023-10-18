import {
  Container,
  Brand,
  Newnote,
  Menu,
  Search,
  Header,
  Content,
} from "./styles";

export const Home = () => {
  return (
    <Container>
      <Brand>Brand</Brand>
      <Header>Header</Header>
      <Menu>Menu</Menu>
      <Search>Search</Search>
      <Content>Conteudo</Content>
      <Newnote>NewNote</Newnote>
    </Container>
  );
};

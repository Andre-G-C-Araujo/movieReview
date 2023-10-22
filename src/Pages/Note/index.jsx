import { FiPlus } from "react-icons/fi";

import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

export const Note = () => {
  return (
    <Container>
      <Header />

      <ButtonText title="Excluir Nota" />
      <Content>
        <h1>Introduçao á MoviewReviewsWebApp</h1>

        <p>
          Procurando ser uma aplicação do qual o usuario pode estar avaliando e
          comentando os filmes, que assistem, auxiliando quem busca um boa
          diversão e opnião geral sobre o filme do qual procura. Recomendamos
          sites e blogs, e varias outras fontes, aonde recomendamos e deixamos
          bem claro a divulgação do nome do hoster. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tenetur laborum dolore, itaque, dolorem
          sapiente, quam ut minus atque consectetur veniam officia iusto
          molestias placeat distinctio modi aliquam quos unde minima.
        </p>
        <small>
          Não nos resposabilizamos por comportamentos abusivos ou tag más
          intencionadas ou mal interpretadas. Porem para preservação da ordem.
          qualquer tag que possa ser ofensivo de alguma, será analisada com as
          devidas formas perante nosso sistema de protação ao úsuario e cliente
          do MoviesRevies.inc
        </small>
      </Content>

      <Section title="Links úteis">
        <a href="https://www.github.com/Andre-G-C-Araujo">
          https://www.github.com/Andre-G-C-Araujo
        </a>
        <a href="https://youtube.com.br">https://www.youtube.com</a>
      </Section>
      <Section classname="sectionTag" title="Links úteis">
        <div>
          <Tag title="Sobre a empresa" />
          <Tag title="Movies Reviews" />
          <Tag title="History" />
          <Tag title="Sobre a empresa" />
          <Tag title="Movies Reviews" />
          <Tag title="History" />
        </div>
      </Section>
    </Container>
  );
};

// header - div w/ btn or just btn with margin
//box- h1 - p
// links uteis dois input/
//section with tags;

//btuton

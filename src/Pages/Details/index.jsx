import { FiArrowLeft, FiPlus, FiClock } from "react-icons/fi";

import { Container, HeaderContent, Content, TextContent } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { StarRating } from "../../components/StartRating";

export const Details = () => {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonText title="Voltar" />
        <HeaderContent>
          <header>
            <h1>Pirates of Cariben</h1>
            <StarRating rating={4} />
          </header>
          {/*  futuramente recebe created e user. */}
          <main className="detailsUserNote">
            <span>
              <img src="https://github.com/Andre-G-C-Araujo.png" />
              {/* futuramente recebe user name */}
              <p style={{ margin: "0 .5rem" }}>Por</p> <h3> Andre Caue</h3>
            </span>
            <span>
              <FiClock />
              Foi Criado em 00:00
            </span>
          </main>
        </HeaderContent>

        <Section>
          <Tag title="Drama" />
          <Tag title="Ficção" />
          <Tag title="Família" />
        </Section>

        <TextContent>
          <p className="mainText">
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
            "fantasma" é uma inteligência desconhecida que está enviando
            mensagens codificadas através de radiação gravitacional, deixando
            coordenadas em binário que os levam até uma instalação secreta da
            NASA liderada pelo professor John Brand. O cientista revela que um
            buraco de minhoca foi aberto perto de Saturno e que ele leva a
            planetas que podem oferecer condições de sobrevivência para a
            espécie humana. As "missões Lázaro" enviadas anos antes
            identificaram três planetas potencialmente habitáveis orbitando o
            buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em
            homenagem aos astronautas que os pesquisaram. Brand recruta Cooper
            para pilotar a nave espacial Endurance e recuperar os dados dos
            astronautas; se um dos planetas se mostrar habitável, a humanidade
            irá seguir para ele na instalação da NASA, que é na realidade uma
            enorme estação espacial. A partida de Cooper devasta Murphy.
          </p>
          <p className="subText">
            formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o
            físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no
            buraco de minhoca e se dirigem a Miller, porém descobrem que o
            planeta possui enorme dilatação gravitacional temporal por estar tão
            perto de Gargântua: cada hora na superfície equivale a sete anos na
            Terra. Eles entram em Miller e descobrem que é inóspito já que é
            coberto por um oceano raso e agitado por ondas enormes. Uma onda
            atinge a tripulação enquanto Amelia tenta recuperar os dados de
            Miller, matando Doyle e atrasando a partida. Ao voltarem para a
            Endurance, Cooper e Amelia descobrem que 23 anos se passaram. ---
            Além de Cooper, a tripulação da Endurance é
          </p>
          <p className="mainText">
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
            "fantasma" é uma inteligência desconhecida que está enviando
            mensagens codificadas através de radiação gravitacional, deixando
            coordenadas em binário que os levam até uma instalação secreta da
            NASA liderada pelo professor John Brand. O cientista revela que um
            buraco de minhoca foi aberto perto de Saturno e que ele leva a
            planetas que podem oferecer condições de sobrevivência para a
            espécie humana. As "missões Lázaro" enviadas anos antes
            identificaram três planetas potencialmente habitáveis orbitando o
            buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em
            homenagem aos astronautas que os pesquisaram. Brand recruta Cooper
            para pilotar a nave espacial Endurance e recuperar os dados dos
            astronautas; se um dos planetas se mostrar habitável, a humanidade
            irá seguir para ele na instalação da NASA, que é na realidade uma
            enorme estação espacial. A partida de Cooper devasta Murphy.
          </p>
        </TextContent>
      </Content>
    </Container>
  );
};

// header - div w/ btn or just btn with margin
//box- h1 - p
// links uteis dois input/
//section with tags;

//btuton

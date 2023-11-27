import { FiClock } from "react-icons/fi";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, HeaderContent, Content, TextContent } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { StarRating } from "../../components/StartRating";

import placeholderImg from "../../assets/avatar_placeholder.svg";

export const Details = () => {
  const navigate = useNavigate();

  const { user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : placeholderImg;

  const [data, setData] = useState(null);

  const params = useParams();

  async function handleDeleteNote() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/movies_notes/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movies_notes/${params.id}`);
      setData(response.data);
    }
    console.log(data);
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <Content>
          <ButtonText title="Voltar" link={"/"} />
          {/*  esse button ta rediricionando? */}
          <HeaderContent>
            <header>
              <h1>{data.title}</h1>
              <StarRating rating={Number(data.rating)} />
            </header>
            {/*  futuramente recebe created e user. */}
            <main className="detailsUserNote">
              <span>
                <img src={avatarUrl} alt={`Foto de ${user.name}`} />
                {/* futuramente recebe user name */}
                <p style={{ margin: "0 .5rem" }}>Por</p> <h3>{user.name}</h3>
              </span>
              <span>
                <FiClock />
                Foi Criado em {data.create_at}
              </span>
            </main>
          </HeaderContent>
          <Section>
            {data.moviesTags.map((tag, index) => (
              <Tag title={tag.name} key={index} />
            ))}
          </Section>
          <TextContent>{data.description}</TextContent>
          <button
            onClick={handleDeleteNote}
            style={{
              color: "red",
              border: "none",
              background: "transparent",
              margin: "auto",
            }}
          >
            Deletar Nota
          </button>
        </Content>
      )}
    </Container>
  );
};

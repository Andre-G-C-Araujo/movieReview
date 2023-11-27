import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Container, Brand, Profile } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

import placeholderImg from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const Header = ({ setSearch }) => {
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : placeholderImg;

  return (
    <Container>
      <Brand to={"/"}>
        <h1>Movies Review</h1>
      </Brand>

      <Input
        placeholder="Pesquise por um título ou tag"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
        </div>
        <img src={avatarUrl} alt="Foto de perfil" />
      </Profile>
      <ButtonText //NAO PODE SER CHILDREN.
        title="Sair"
        onClick={handleSignOut}
        style={{
          position: "relative",
          right: "9rem",
          top: "4rem",
          height: "fit-content",
        }}
      />
    </Container>
  );
};

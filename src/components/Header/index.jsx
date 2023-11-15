import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Container, Brand, Profile } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

import placeholderImg from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export const Header = () => {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : placeholderImg;

  return (
    <Container>
      <Brand>
        <h1>Movies Review</h1>
      </Brand>

      <Input placeholder="Pesquise por um título" />

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
        </div>
        <img src={avatarUrl} alt="Foto de perfil" />
      </Profile>
      <ButtonText //NAO PODE SER CHILDREN.
        title="Sair"
        onClick={signOut}
        style={{ position: "relative", right: "9rem", top: "1rem" }}
      />
    </Container>
  );
};

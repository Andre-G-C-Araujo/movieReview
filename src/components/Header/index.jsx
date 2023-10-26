import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Container, Brand, Profile } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export const Header = () => {
  return (
    <Container>
      <Brand>
        <h1>Movies Review</h1>
      </Brand>

      <Input placeholder="Pesquise por um título" />
      <div className="leaveTextButton">
        <Profile to="/profile">
          <div>
            <strong>Andre Caue</strong>
          </div>
          <img
            src="https://github.com/Andre-G-C-Araujo.png"
            alt="Foto de perfil"
          />
        </Profile>
        <ButtonText title="Sair" link="/" />
      </div>
    </Container>
  );
};

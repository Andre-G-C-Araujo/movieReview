import { Container, Logout, Profile } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export const Header = () => {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/Andre-G-C-Araujo.png"
          alt="Foto de perfil"
        />
        <div>
          <span>Bem Vindo! Wellcome!</span>
          <strong>Andre Caue</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
};

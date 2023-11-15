import { Link } from "react-router-dom";
import { Container } from "./styles";

export const Button = ({ title, icon: Icon, link, onClick, ...rest }) => {
  return (
    <Container onClick={onClick}>
      <Link to={link}>
        <Icon />
        {title}
      </Link>
    </Container>
  );
};

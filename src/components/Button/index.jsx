import { Link } from "react-router-dom";
import { Container } from "./styles";

export const Button = ({ title, icon: Icon, link, ...rest }) => {
  return (
    <Container>
      <Link to={link}>
        <Icon />
        {title}
      </Link>
    </Container>
  );
};

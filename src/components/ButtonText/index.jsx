import { Link } from "react-router-dom";
import { Container } from "./styles";

export const ButtonText = ({
  title,
  isActive = false,
  link,

  ...rest
}) => {
  return (
    <Container type="button" $isactive={isActive} {...rest}>
      <Link to={link}>{title}</Link>
    </Container>
  );
};

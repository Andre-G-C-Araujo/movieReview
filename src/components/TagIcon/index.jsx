import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export const TagIcon = ({ title, isnew, ...rest }) => {
  return (
    <Container isnew={isnew} {...rest}>
      {title}
      {isnew ? <FiPlus /> : <FiX />}
    </Container>
  );
};

import { Container } from "./styles";

export const Input = ({ icon: Icon, isNew, bgNote, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input className={bgNote} {...rest} />
    </Container>
  );
};

import { Container } from "./styles";

export const Input = ({ icon: Icon, isNew, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input className="inputSearch" {...rest} />
    </Container>
  );
};

import { Container } from "./styles";

export function Textarea({ value, isonnote, ...rest }) {
  return (
    <Container isonnote={"true"} {...rest}>
      {value}
    </Container>
  );
}

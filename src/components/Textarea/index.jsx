import { Container } from "./styles";

export function Textarea({ value, isOnNote = false, ...rest }) {
  return (
    <Container isOnNote {...rest}>
      {value}
    </Container>
  );
}

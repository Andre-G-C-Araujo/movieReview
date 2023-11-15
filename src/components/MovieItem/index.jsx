import { StarRating } from "../StartRating";
import { Tag } from "../Tag";
import { Container, Content } from "./styles";

export const MovieItem = ({ title, rating = "4", description, tags }) => {
  console.log(title, rating, description, tags);
  return (
    <Container>
      <header>
        <h1>{title}</h1>
        <StarRating rating={Number(rating)} />
      </header>

      <Content>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          ratione facilis? Sit cumque enim molestias asperiores amet repudiandae
          sint ratione hic quod at blanditiis, reprehenderit expedita in est
          consequatur quisquam!
        </p>
        <Tag title="Drama" />
        <Tag title="Action" />
        <Tag title="Terror" />
        <Tag title="Suspense" />
      </Content>
    </Container>
  );
};

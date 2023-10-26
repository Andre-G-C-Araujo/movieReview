import { StarRating } from "../StartRating";
import { Tag } from "../Tag";
import { Container, Content } from "./styles";
import { FaStar } from "react-icons/fa";

export const MovieItem = ({ title, rating = 4 }) => {
  return (
    <Container>
      <header>
        <h1>{title}</h1>
        <StarRating rating={rating} />
      </header>

      <Content>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          ratione facilis? Sit cumque enim molestias asperiores amet repudiandae
          sint ratione hic quod at blanditiis, reprehenderit expedita in est
          consequatur quisquam!
        </p>
        <Tag title="Drama" />
      </Content>
    </Container>
  );
};

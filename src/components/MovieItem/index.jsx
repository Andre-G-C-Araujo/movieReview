import { StarRating } from "../StartRating";
import { Container, Content } from "./styles";
import { Tag } from "../Tag";

export const MovieItem = ({ title, rating, description, tags, ...rest }) => {
  return (
    <Container {...rest}>
      <header>
        <h1>{title}</h1>

        <StarRating rating={Number(rating)} />
      </header>

      <Content>
        <p style={{ width: "100%" }}>{description}</p>
        {tags.map((tag, index) => (
          <Tag title={tag.name} key={index} />
        ))}
      </Content>
    </Container>
  );
};

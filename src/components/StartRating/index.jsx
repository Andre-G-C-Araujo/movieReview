import { Container } from "./styles";

import { FaStar } from "react-icons/fa";

export const StarRating = ({ rating, ...rest }) => {
  // console.log(`eu aqui ${rating}`);
  return (
    <Container rating={rating}>
      <FaStar className="oneStar" />
      <FaStar className="twoStar" />
      <FaStar className="threeStar" />
      <FaStar className="fourStar" />
      <FaStar className="fiveStar" />
    </Container>
  );
};

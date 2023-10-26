import styled from "styled-components";

// const checkRating = (value) => {
//   if (value) {
//     return `orange`;
//   }

//   return;
// };
export const Container = styled.div`
  width: fit-content;
  padding: 0.5rem 0;

  > .oneStar {
    color: ${({ theme, rating }) =>
      rating === 1 ? theme.COLORS.TEXT_COLOR : "none"};
  }
  > .oneStar,
  .twoStar {
    color: ${({ theme, rating }) =>
      rating === 2 ? theme.COLORS.TEXT_COLOR : "none"};
  }
  > .oneStar,
  .twoStar,
  .threeStar {
    color: ${({ theme, rating }) =>
      rating === 3 ? theme.COLORS.TEXT_COLOR : "none"};
  }
  > .oneStar,
  .twoStar,
  .threeStar,
  .fourStar {
    color: ${({ theme, rating }) =>
      rating === 4 ? theme.COLORS.TEXT_COLOR : "none"};
  }
  > .oneStar,
  .twoStar,
  .threeStar,
  .fourStar,
  .fiveStar {
    color: ${({ theme, rating }) =>
      rating === 5 ? theme.COLORS.TEXT_COLOR : "none"};
  }
`;

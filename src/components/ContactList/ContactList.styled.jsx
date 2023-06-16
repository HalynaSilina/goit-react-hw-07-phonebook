import styled from '@emotion/styled';

export const List = styled.ul`
  max-height: 60vh;
  margin-top: 12px;
  padding: 8px 12px;
  list-style: none;
  background-color: #fff;
  background-image: repeating-linear-gradient(
    to bottom,
    #e6f4f1,
    #e6f4f1 20px,
    #fcfcd4 20px,
    #fcfcd4 50px
  );
  border-radius: 8px;
  border: 2px solid #ef972c;
  overflow-y: scroll;
  @media screen and (min-width: 1024px) {
    margin-top: 0;
    min-height: 200px;
  }
`;

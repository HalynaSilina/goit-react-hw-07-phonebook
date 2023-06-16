import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 36px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    padding: 24px;
    display: grid;
    column-gap: 20px;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: minmax(100px, auto);
}
@media screen and (min-width: 1200px) {
  max-width: 1200px;
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-weight: 900;
  text-align: center;
  font-size: 40px;
`;

export const Contacts = styled.h2`
  margin-top: 50px;
  font-weight: 700;
  text-align: center;
  font-size: 32px;
  @media screen and (min-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 0;
  }
`;

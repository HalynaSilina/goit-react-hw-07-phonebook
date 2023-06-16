import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 8px;
  align-items: baseline;
  justify-content: space-between;
`;
export const Contact = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  border-radius: 8px;
  border: 2px solid #ef972c;
  background-color: #ef972c;
  cursor: pointer;
  transition: transform 300ms linear, background-image 300ms linear 300ms,
    border-color 300ms linear 300ms;
  background-size: 200% auto;
  background-image: linear-gradient(
    30deg,
    #f51212 0%,
    #f09819 51%,
    #f51212 100%
  );
  :hover,
  :focus {
    background-position: right center;
    transform: scale(1.1);
    border-color: #f51212;
  }
  :active {
    transform: scale(0.95);
  }
`;

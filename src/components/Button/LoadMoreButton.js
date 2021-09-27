import styled from "@emotion/styled";

export const ButtonLoadMore = styled.button`
  display: flex;
  justify-content: center;
  width: 150px;
  wight: 35px;
  margin: 0 auto;

  background-color: white;
  border: 1px solid grey;
  border-radius: 7%;

  &:hover,
  &:focus {
    background-color: grey;
    border: 1px solid white;
    cursor: pointer;
  }
`;

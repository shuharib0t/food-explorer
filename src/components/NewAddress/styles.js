import styled from "styled-components";

export const Container = styled.form`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  padding: 0 2rem;

  overflow-y: auto;

  div {
    width: 100%;
    display: flex;
    gap: 1rem;
  }

  button {
    width: 50%;
    min-height: 4.4rem;

    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1368px) {
    gap: 2rem;

    padding: 0 3.2rem;

    button {
      min-height: 5rem;
    }
  }
`;

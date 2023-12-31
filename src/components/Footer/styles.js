import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7.7rem;

  padding: 2.9rem 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  p {
    font-size: 12px;
    font-family: "DM Sans", sans-serif;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media screen and (min-width: 900px) {
    padding: 2.8rem 5.2rem;
  }

  @media screen and (min-width: 1368px) {
    padding: 2.8rem 12.3rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;

    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }
`;

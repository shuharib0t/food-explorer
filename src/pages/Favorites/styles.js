import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  main {
    width: 100%;

    padding: 3.2rem;

    background: ${({ theme }) => theme.COLORS.DARK_400};

    .favorites-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h1 {
        margin-top: 2.8rem;

        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  @media screen and (min-width: 900px) {
    ::-webkit-scrollbar {
      width: 8px;
    }

    main {
      width: 100%;
      padding: 3.2rem 5.2rem;
    }
  }

  @media screen and (min-width: 1368px) {
    main {
      width: 100%;
      padding: 3.2rem 12rem;
    }
  }
`;

export const FavoritesList = styled.ul`
  width: 100%;

  margin-top: 1.6rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.6rem;

  @media screen and (min-width: 900px), screen and (min-width: 1368px) {
    justify-content: center;
    gap: 2.4rem;
  }
`;

export const EmptyFavorites = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;

  text-align: center;

  img {
    width: min(100%, 40rem);

    margin-top: 8rem;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    font-weight: 500;

    span {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`;

export const Scrollbar = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow-y: auto;

  @media screen and (min-width: 900px), screen and (min-width: 1368px) {
    margin: 0 2px 0 0;
  }
`;

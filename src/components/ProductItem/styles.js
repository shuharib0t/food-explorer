import styled from "styled-components";

export const Container = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.5rem;

  .product-image {
    height: 5.4rem;
    width: 5.4rem;
    object-fit: cover;

    border-radius: 50%;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    gap: 2rem;

    span {
      font-size: 1.4rem;
    }

    button {
      background: transparent;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
      font-family: Roboto;
      font-size: 1.2rem;
      line-height: 160%;

      border: 0;

      transition: 0.2s;

      &:hover {
        text-decoration: underline;
        filter: brightness(1.3);
      }
    }
  }

  .dish-info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    a {
      text-decoration: none;
    }

    h3 {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      .quantity {
        white-space: nowrap;
      }

      .title {
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    > span {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-family: Roboto;
      font-size: 1.4rem;

      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 900px) {
    width: 100%;
    padding: 2rem;
    gap: 2rem;

    .product-image {
      height: 7.2rem;
      width: 7.2rem;
      object-fit: cover;

      border-radius: 50%;
    }

    .dish-info {
      h3 {
        .title,
        .quantity {
          font-size: 1.6rem;
        }
      }

      > span {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: Roboto;
        font-size: 1.6rem;
      }
    }

    > div {
      button {
        font-size: 1.6rem;
      }
    }
  }

  @media screen and (min-width: 1368px) {
    width: 100%;
    padding: 2rem;

    .product-image {
      height: 10.2rem;
      width: 10.2rem;
      object-fit: cover;

      border-radius: 50%;
    }

    .dish-info {
      h3 {
        .title,
        .quantity {
          font-size: 2rem;
        }
      }

      > span {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: Roboto;
        font-size: 2rem;
      }
    }

    > div {
      button {
        font-size: 2rem;
      }
    }
  }
`;

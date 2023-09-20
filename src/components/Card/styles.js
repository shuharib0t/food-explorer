import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;

  transition: animation 500ms;
  animation: downtop 500ms;

  > img {
    width: 4rem;
    height: 4rem;

    object-fit: cover;
    border-radius: 50%;

    padding: 1.6rem;

    border-radius: 1rem 0 0 1rem;
  }

  @keyframes downtop {
    0% {
      opacity: 0;
      transform: translateY(-1.5rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 1368px) {
    width: 100%;

    margin-bottom: 2.4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 1.6rem;

  .card {
    width: 21rem;
    height: 29.2rem;

    position: relative;

    padding: 2.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .hide,
    .description {
      display: none;
    }

    .tools {
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;

      a {
        display: flex;
      }

      .favorite {
        width: 2.4rem;
        height: 2.2rem;

        cursor: pointer;
      }

      .edit {
        width: 2.4rem;
        height: 2.4rem;

        margin-bottom: 3rem;
      }
    }

    .meal {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.2rem;

      img {
        width: 8.8rem;
        height: 8.8rem;

        object-fit: cover;
        border-radius: 50%;
      }

      h2 {
        display: flex;
        align-items: center;

        font-size: 1.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        svg {
          width: 1rem;
          height: 1rem;

          margin-left: 0.4rem;
        }
      }

      span {
        margin-bottom: 4px;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.4rem;

        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        .quantity {
          display: flex;
          align-items: center;
          gap: 1.4rem;

          cursor: pointer;

          svg {
            width: 2.4rem;
            height: 2.4rem;
          }

          p {
            font-size: 1.6rem;
            font-family: "Roboto", sans-serif;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
          }
        }

        button {
          margin-top: 1.6rem;

          width: 16.2rem;
          height: 3.2rem;

          border-radius: 0.5rem;
        }
      }
    }
  }

  @media (min-width: 1368px) {
    .card {
      width: 30.4rem;
      height: 46.2rem;

      padding: 2.4rem;

      .meal {
        width: 25.6rem;
        gap: 1.6rem;

        img {
          width: 17.6rem;
          height: 17.6rem;

          object-fit: cover;
          border-radius: 50%;
        }

        h2 {
          font-size: 2.4rem;
          font-weight: bold;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};

          svg {
            width: 2.4rem;
            height: 2.4rem;
          }
        }

        .description {
          display: flex;

          text-align: center;

          font-size: 1.4rem;
          font-weight: 400;
          font-family: "Roboto", sans-serif;

          color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        span {
          margin: 0;

          font-size: 3.2rem;
          font-weight: 500;
        }

        .wrapper {
          display: flex;
          flex-direction: row;

          .quantity {
            svg {
              width: 2.4rem;
              height: 2.4rem;
            }

            p {
              font-size: 2rem;
              font-weight: bold;
              font-family: "Roboto", sans-serif;
              color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
          }

          button {
            margin: 0 0 0 1.6rem;

            width: 9.2rem;
            height: 4.8rem;
          }
        }
      }
    }
  }
`;
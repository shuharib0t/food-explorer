import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .swiper {
    width: 100%;
    position: relative;

    z-index: 0;
  }

  .swiper-wrapper {
    z-index: 0;
  }

  .swiper-slide {
    width: fit-content;
  }

  .swiper-slide:nth-child(n + 2) {
    margin-left: 1.6rem;
  }

  .swiper-button-next {
    justify-content: flex-end;
    padding-right: 2rem;
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0) 0%,
      rgba(0, 10, 15, 1) 100%
    );
  }

  .swiper-button-prev {
    justify-content: flex-start;
    padding-left: 2rem;
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 1) 0%,
      rgba(0, 10, 15, 0) 100%
    );
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 100%;
    width: 8%;
    top: 2.2rem;

    &::after {
      font-size: 3.4rem;
    }
  }

  > h2 {
    margin-top: 2.4rem;

    font-size: 1.8rem;
    font-weight: 500;
    line-height: 140%;
  }

  @media screen and (min-width: 900px) {
    .swiper-slide:nth-child(n + 2) {
      margin-left: 2.7rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: flex;

      &::after {
        font-size: 2.4rem;
      }
    }

    .swiper-button-disabled {
      display: none;
    }

    > h2 {
      margin-top: 2.4rem;
    }
  }

  @media screen and (min-width: 1368px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: flex;

      &::after {
        font-size: 3.4rem;
      }
    }

    .swiper-button-disabled {
      display: none;
    }

    > h2 {
      margin-top: 4.8rem;

      font-size: 3rem;
    }
  }
`;

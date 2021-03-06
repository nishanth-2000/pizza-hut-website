import styled from "styled-components";

export const BodyContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("images/pizza_home_page.jpg");
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const BodyContent = styled.div`
  height: calc(100vh - -80px);
  max-height: 100%;
  width: 100%;
  padding: 0rem calc((100vh - 1300px) / 2);
`;

export const BodyItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }

  h1 {
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 2px 5px #e9ba23;
    letter-spacing: 3px;
  }

  p {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 2rem;
  }

  button {
    font-size: 1.5rem;
    padding: 2rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
      background: #ffc500;
      transition: 0.2s ease-out;
      cursor: pointer;
      color: #000;
    }
  }
`;

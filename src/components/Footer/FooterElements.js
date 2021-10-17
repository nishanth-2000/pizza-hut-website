import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #000;
`;

export const FooterHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  color: #fff;
`;

export const FooterCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const FooterImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 4px 5px #fec500;
`;

export const FooterTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const FooterDescription = styled.p`
  margin-bottom: 1rem;
`;

export const FooterPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const FooterBtn = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    cursor: pointer;
    background: yellow;
    color: #000;
  }
`;

import styled from "styled-components";

export const CatagoryContainer = styled.div`
  height: 100%;
  width: 100vw;
  max-width: 100%;
  background: #282a35;
`;

export const CatagoryBody = styled.div`
  margin: 0;
  height: 100%;
  background: grey;
`;
export const CatagoryTabs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto;
  color: #fff;
  background: #ffff;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 5%);
`;

export const CatogoryList = styled.li`
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  text-transform: capitalize;
  list-style: none;
  font-size: 2rem;
  padding: 0.7rem 2rem;
  text-align: center;
  border-right-width: 1px;
  border-right-style: groove;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? "red" : "#ffff")};
  transition: 0.2s ease-out;

  &:hover {
    text-decoration: underline !important;
    transition: 0.2s ease-in-out;
  }
`;

export const CatagoryContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  color: #fff;
`;

export const CatagoryCard = styled.div`
  margin: 0 2rem;
  padding: 1rem;
  line-height: 2;
  width: 320px;
`;

export const CatagoryImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 4px 5px #fec500;
`;

export const CatagoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const CatagoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const CatagoryDescription = styled.p`
  margin-bottom: 1rem;
`;

export const CatagoryPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const CatagoryBtn = styled.button`
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

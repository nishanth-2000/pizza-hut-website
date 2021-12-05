import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { catagoryContent } from "../../utils";
import { footerData } from "../Footer/data";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  CatagoryContainer,
  CatagoryBody,
  CatagoryTabs,
  CatogoryList,
  CatagoryContent,
  CatagoryCard,
  CatagoryImg,
  CatagoryInfo,
  CatagoryPrice,
  CatagoryTitle,
  CatagoryDescription,
  CatagoryBtn,
} from "./CatagoryElements";

export default function Catagory() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const catagory = query.get("name");

  const handleChangeCatagory = (selectedCatagory) => {
    history.push(`catagory?name=${selectedCatagory}`);
  };

  return (
    <CatagoryContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <CatagoryBody>
        <CatagoryTabs>
          <CatogoryList
            isSelected={catagory === "veg" ? true : false}
            onClick={handleChangeCatagory.bind(this, "veg")}
          >
            Veg
          </CatogoryList>
          <CatogoryList
            isSelected={catagory === "mix" ? true : false}
            onClick={handleChangeCatagory.bind(this, "mix")}
          >
            Mix
          </CatogoryList>
          <CatogoryList
            isSelected={catagory === "full" ? true : false}
            onClick={handleChangeCatagory.bind(this, "full")}
          >
            Full
          </CatogoryList>
        </CatagoryTabs>
        <CatagoryContent>
          {catagoryContent[catagory].map((pizza, index) => (
            <CatagoryCard key={index}>
              <CatagoryImg src={pizza.img} alt={pizza.alt} />
              <CatagoryInfo>
                <CatagoryTitle>{pizza.name}</CatagoryTitle>
                <CatagoryDescription>{pizza.description}</CatagoryDescription>
                <CatagoryPrice>{pizza.price}</CatagoryPrice>
                <CatagoryBtn>View ALL</CatagoryBtn>
              </CatagoryInfo>
            </CatagoryCard>
          ))}
        </CatagoryContent>
      </CatagoryBody>
    </CatagoryContainer>
  );
}

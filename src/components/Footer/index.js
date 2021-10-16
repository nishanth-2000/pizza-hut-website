import React from "react";
import {
  FooterContainer,
  FooterHeading,
  FooterWrapper,
  FooterCard,
  FooterInfo,
  FooterImg,
  FooterTitle,
  FooterDescription,
  FooterPrice,
  FooterBtn,
} from "./FooterElements";

export default function Footer({ heading, footerData }) {
  return (
    <FooterContainer>
      <FooterHeading>{heading}</FooterHeading>
      <FooterWrapper>
        {footerData.map((pizza, index) => (
          <FooterCard key={index}>
            <FooterImg src={pizza.img} alt={pizza.alt} />
            <FooterInfo>
              <FooterTitle>{pizza.name}</FooterTitle>
              <FooterDescription>{pizza.description}</FooterDescription>
              <FooterPrice>{pizza.price}</FooterPrice>
              <FooterBtn>View ALL</FooterBtn>
            </FooterInfo>
          </FooterCard>
        ))}
      </FooterWrapper>
    </FooterContainer>
  );
}

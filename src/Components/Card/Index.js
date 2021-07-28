import React from "react";
import { CardContainer, CardContent, CardText } from "./styles";

const Card = ({ children: text, alignment, img, link }) => (
  <CardContainer>
    <a href={link}>
      <CardContent alignment={alignment} img={img}>
        <CardText>
          <h1>{text}</h1>
        </CardText>
      </CardContent>
    </a>
  </CardContainer>
);

export default Card;

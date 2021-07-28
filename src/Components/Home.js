import { useEffect } from "react";
import { Parallax } from "./Styled";

import Card from "./Card/Index";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Ethan Yee";
  });
  const cards = [
    {
      text: "About Me",
      img: "photography.jpg",
      link: "/Portfolio#/About",
    },
    {
      text: "Projects",
      img: "contact.jpg",
      link: "/Portfolio#/Projects",
    },
    {
      text: "Clubs",
      img: "socials.jpg",
      link: "/Portfolio#/Clubs",
    },
    {
      text: "Work Experience",
      img: "socials.jpg",
      link: "/Portfolio#/WorkExperience",
    },
    {
      text: "Resume",
      img: "Resume.jpg",
      link: "/Portfolio#/Resume",
    },
  ];
  return (
    <Parallax>
      {cards.map((card, idx) => (
        <Card
          alignment={idx % 2 === 0 ? "left" : "right"}
          img={card.img}
          link={card.link}
        >
          {card.text}
        </Card>
      ))}
    </Parallax>
  );
}

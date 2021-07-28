import { useEffect } from "react";

export default function Clubs() {
  useEffect(() => {
    document.title = "Clubs - Ethan Yee";
  });
  return <h1>Clubs</h1>;
}

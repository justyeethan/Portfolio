import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About - Ethan Yee";
  });
  return <h1>About</h1>;
}

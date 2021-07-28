import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    document.title = "Projects - Ethan Yee";
  });
  return <h1>Projects</h1>;
}

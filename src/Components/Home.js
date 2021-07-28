import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Ethan Yee";
  });
  return <h1>Home</h1>;
}

import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import { languages } from "../languages";
import { words } from "../words";
import LangChips from "./components/LangChips";
import { useEffect, useState } from "react";
import Word from "./components/Word";

function App() {
  const [currentWord, setCurrentWord] = useState("react");

  const letterElements = currentWord
    .split("")
    .map((letter, i) => <span key={i}>{letter.toUpperCase()}</span>);

  const langList = languages.map((lang) => (
    <span
      className="chip"
      key={lang.id}
      style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
    >
      {lang.name}
    </span>
  ));

  return (
    <main>
      <Header />
      <GameStatus />
      <LangChips langList={langList} />
      <Word letterElements={letterElements} />
    </main>
  );
}

export default App;

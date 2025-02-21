import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import { languages } from "../languages";
import LangChips from "./components/LangChips";

function App() {
  const langList = languages.map((lang, i) => (
    <div
      key={i}
      style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
    >
      {lang.name}
    </div>
  ));

  return (
    <main>
      <Header />
      <GameStatus />
      <LangChips langList={langList} />
    </main>
  );
}

export default App;

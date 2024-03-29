import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ChoiceContainer from "./components/ChoiceContainer"
import ImperiumContainer from "./components/ImperiumContainer";
import ChaosContainer from "./components/ChaosContainer";
import Footer from "./components/Footer";

function App() {
    const [page, setPage] = useState("Imperium");
  return (
    <>
      <Header updateFunction={setPage}/>
      {!page && <ChoiceContainer updateFunction={setPage} />}
      {page === "Imperium" && <ImperiumContainer updateFunction={setPage} />}
      {page === "Chaos" && <ChaosContainer updateFunction={setPage} />}
      <Footer></Footer>
    </>
  );
}

export default App;

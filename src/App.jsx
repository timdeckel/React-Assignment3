import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ChoiceContainer from "./components/ChoiceContainer"
import Footer from "./components/Footer";

function App() {
    const [page, setPage] = useState(null);
  return (
    <>
      <Header></Header>
      {!page && <ChoiceContainer updateFunction={setPage} />}
      {page === "loyalists" && <LoyalistContainer updateFunction={setPage} />}
      {page === "Chaos" && <ChaosContainer updateFunction={setPage} />}
      <Footer></Footer>
    </>
  );
}

export default App;

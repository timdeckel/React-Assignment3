import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ContentBody from "./components/ContentBody";
import Footer from "./components/Footer";

function App() {
  function pageState() {
    const [PageState, setPageState] = useState("BaseState");
  }
  return (
    <>
      <Header></Header>
      <ContentBody></ContentBody>
      <Footer></Footer>
    </>
  );
}

export default App;

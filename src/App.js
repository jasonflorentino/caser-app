import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Cases from "./components/Cases";
import Footer from "./components/Footer";
import "./styles/app.scss";

function App() {
  const [input, setInput] = useState(loremIpsum());

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      <div className="App">
        <Header />
        <Input text={input} inputHandler={handleInput} />
        <Cases text={input} />
      </div>
      <Footer />
    </>
  );
}

export default App;

function loremIpsum() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
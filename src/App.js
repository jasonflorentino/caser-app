import { useState } from "react";

import "./styles/app.scss";
import Header from "./components/Header";
import Input from "./components/Input";
import Cases from "./components/Cases";
import Footer from "./components/Footer";

export default function App() {
  const [input, setInput] = useState("");

  const handleInput = e => {
    setInput(e.target.value);
  }

  const pasteLoremIpsum = () => {
    setInput(placeholderIpsum());
  }

  const pastePangrams = () => {
    setInput(placeholderPangrams());
  }
  
  const clearInput = () => {
    setInput("");
  }

  return (
    <>
      <div className="App">
        <Header />
        <Input
          text={input}
          inputHandler={handleInput}
          textSetters={{ pasteLoremIpsum, pastePangrams, clearInput }} 
        />
        <Cases text={input} />
      </div>
      <Footer />
    </>
  );
}

function placeholderIpsum() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

function placeholderPangrams() {
  const pangrams = [
    "The quick brown fox jumps over the lazy dog.",
    "Waltz, bad nymph, for quick jigs vex.",
    "Jived fox nymph grabs quick waltz.",
    "Glib jocks quiz nymph to vex dwarf.",
    "Sphinx of black quartz, judge my vow.",
    "How vexingly quick daft zebras jump!",
    "The five boxing wizards jump quickly.",
    "Jackdaws love my big sphinx of quartz.",
    "Pack my box with five dozen liquor jugs."
  ]

  return pangrams.join('\n');
}
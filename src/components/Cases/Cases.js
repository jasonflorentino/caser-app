import { useState } from "react";
import { toTitleCaseAll, toTitleCase } from "../../utils/utils";
import Case from "./Case";
import "./cases.scss"

const Cases = ({ text }) => {

  //============// 
  // TITLE CASE // 
  //============// 
  
  const [isTitleCaseAll, setIsTitleCaseAll] = useState(false);
  
  const handleTitleCaseAll = () => {
    setIsTitleCaseAll(!isTitleCaseAll);
  }

  let textTitleCase = toTitleCaseAll(text);
  if (!isTitleCaseAll) {
    textTitleCase = toTitleCase(textTitleCase);
  }

  //============// 
  // UPPER CASE // 
  //============// 

  const textUpperCase = text.toUpperCase();

  //============// 
  // UPPER CASE // 
  //============// 

  const textLowerCase = text.toLowerCase();

  return (
    <section className="Cases">
      <header className="Cases__header">
        <h2 className="Cases__heading">Click to Copy</h2>
      </header>
      <main className="Cases__main">
        <Case
          name={"Title Case"}
          text={textTitleCase}
          optionName="All Words"
          optionValue={isTitleCaseAll}
          optionHandler={handleTitleCaseAll} />
        <Case
          name={"UPPER CASE"}
          text={textUpperCase} />
        <Case
          name={"lower case"}
          text={textLowerCase} />
      </main>
    </section>
  )
}

export default Cases;
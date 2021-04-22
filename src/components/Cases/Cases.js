import { useState } from "react";
import Case from "./Case";
import "./cases.scss"

import { toTitleCaseAll, 
         toTitleCase, 
         toKebabCase, 
         toSnakeCase, 
         toCamelCase, 
         toPascalCase, 
         toSentenceCase 
        } from "../../utils/utils";

const Cases = ({ text }) => {

  const handleCopy = (str, setter) => {
    navigator.clipboard.writeText(str)
    .then(()=>{
      setter(true, setTimeout(()=>{setter(false)}, 2000));
    }, ()=>{
      alert("Something went wrong -- Couldn't write to clipboard!")
    });
  }

  /* TITLE CASE */  
  const [isTitleCaseAll, setIsTitleCaseAll] = useState(false);
  const [wasTitleCopied, setWasTitleCopied] = useState(false);
  const handleTitleCaseAll = () => setIsTitleCaseAll(!isTitleCaseAll);
  let textTitleCase = toTitleCaseAll(text);
  if (!isTitleCaseAll) textTitleCase = toTitleCase(textTitleCase);

  /* UPPER CASE */
  const [wasUpperCopied, setWasUpperCopied] = useState(false);
  const textUpperCase = text.toUpperCase();

  /* LOWER CASE */
  const [wasLowerCopied, setWasLowerCopied] = useState(false);
  const textLowerCase = text.toLowerCase();

  /* SENTENCE CASE */
  const [wasSentenceCopied, setWasSentenceCopied] = useState(false);
  const textSentenceCase = toSentenceCase(text);

  /* KEBAB CASE */
  const [isKebabCaseBreak, setIsKebabCaseBreak] = useState(false);
  const [wasKebabCopied, setWasKebabCopied] = useState(false);
  const handleKebabCaseBreak = () => setIsKebabCaseBreak(!isKebabCaseBreak);
  const textKebabCase = toKebabCase(text, isKebabCaseBreak);

  /* SNAKE CASE */
  const [isSnakeCaseBreak, setIsSnakeCaseBreak] = useState(false);
  const [wasSnakeCopied, setWasSnakeCopied] = useState(false);
  const handleSnakeCaseBreak = () => setIsSnakeCaseBreak(!isSnakeCaseBreak);
  const textSnakeCase = toSnakeCase(text, isSnakeCaseBreak);

  /* CAMEL CASE */
  const [isCamelCaseBreak, setIsCamelCaseBreak] = useState(false);
  const [wasCamelCopied, setWasCamelCopied] = useState(false);
  const handleCamelCaseBreak = () => setIsCamelCaseBreak(!isCamelCaseBreak);
  const textCamelCase = toCamelCase(text, isCamelCaseBreak);

  /* PASCAL CASE */
  const [isPascalCaseBreak, setIsPascalCaseBreak] = useState(false);
  const [wasPascalCopied, setWasPascalCopied] = useState(false);
  const handlePascalCaseBreak = () => setIsPascalCaseBreak(!isPascalCaseBreak);
  const textPascalCase = toPascalCase(text, isPascalCaseBreak);

  return (
    <section className="Cases">
      <header className="Cases__header">
        <h2 className="Cases__heading">Click to the buttons Copy</h2>
      </header>
      <main className="Cases__main">
        <Case
          name={"Title Case"}
          text={textTitleCase}
          optionName="All Words"
          optionValue={isTitleCaseAll}
          optionHandler={handleTitleCaseAll} 
          wasCopied={wasTitleCopied}
          copyHandler={()=>{handleCopy(textTitleCase,setWasTitleCopied)}} 
        />
        <Case
          name={"UPPER CASE"}
          text={textUpperCase}
          wasCopied={wasUpperCopied}
          copyHandler={()=>{handleCopy(textUpperCase,setWasUpperCopied)}} 
        />
        <Case
          name={"lower case"}
          text={textLowerCase}
          wasCopied={wasLowerCopied}
          copyHandler={()=>{handleCopy(textLowerCase,setWasLowerCopied)}} 
        />
        <Case
          name={"Sentence case"}
          text={textSentenceCase}
          wasCopied={wasSentenceCopied}
          copyHandler={()=>{handleCopy(textSentenceCase,setWasSentenceCopied)}} 
        />
        <Case
          name={"camelCase"}
          text={textCamelCase}
          optionName="Ignore line-breaks"
          optionValue={isCamelCaseBreak}
          optionHandler={handleCamelCaseBreak}
          wasCopied={wasCamelCopied}
          copyHandler={()=>{handleCopy(textCamelCase,setWasCamelCopied)}} 
        />
        <Case
          name={"PascalCase"}
          text={textPascalCase}
          optionName="Ignore line-breaks"
          optionValue={isPascalCaseBreak}
          optionHandler={handlePascalCaseBreak}
          wasCopied={wasPascalCopied}
          copyHandler={()=>{handleCopy(textPascalCase,setWasPascalCopied)}} 
        />
        <Case
          name={"kebab-case"}
          text={textKebabCase}
          optionName="Ignore line-breaks"
          optionValue={isKebabCaseBreak}
          optionHandler={handleKebabCaseBreak}
          wasCopied={wasKebabCopied}
          copyHandler={()=>{handleCopy(textKebabCase,setWasKebabCopied)}} 
        />
        <Case
          name={"snake_case"}
          text={textSnakeCase}
          optionName="Ignore line-breaks"
          optionValue={isSnakeCaseBreak}
          optionHandler={handleSnakeCaseBreak}
          wasCopied={wasSnakeCopied}
          copyHandler={()=>{handleCopy(textSnakeCase,setWasSnakeCopied)}} 
        />
      </main>
    </section>
  )
}

export default Cases;
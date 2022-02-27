import { Button, Textarea, Title } from '@mantine/core';

import Stats from "./Stats";
import "./input.scss"

export default function Input({ text, inputHandler, textSetters }) {
  const { pasteLoremIpsum, pastePangrams, clearInput } = textSetters;
  
  const [words, lines] = countWords(text);

  return (
    <section className="Input">
      <header className="Input__header">
        <Title order={2}>Put your text here</Title>
        <div className="Input__details">
          <Stats len={text.length} words={words} lines={lines} />
          <Button className="Input__tablet" onClick={clearInput}>Clear</Button>
          <Button className="Input__tablet" onClick={pasteLoremIpsum}>Paste Lorem Ipsum</Button>
          <Button className="Input__tablet" onClick={pastePangrams}>Paste Pangrams</Button>
        </div>
      </header>
      <Textarea
       autosize
       value={text}
       onChange={inputHandler}
       placeholder="Paste or type your text here"
       maxRows={6}
       minRows={6}
      />
      <Button className="Input__mobile" onClick={clearInput}>Clear</Button>
      <Button className="Input__mobile" onClick={pasteLoremIpsum}>Paste Lorem Ipsum</Button>
      <Button className="Input__mobile" onClick={pastePangrams}>Paste Pangrams</Button>
    </section>
  )
}

function countWords(str) {
  const lines = str.split('\n').filter((l) => !!l);
  const words = str.split(/\s/).filter((w) => !!w);
  return [words.length, lines.length];
}
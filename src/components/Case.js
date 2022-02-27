import { Button, Checkbox, Textarea, Title } from "@mantine/core"

import "./Case.scss"

export default function Case({ 
  name, 
  text, 
  optionName, 
  optionValue, 
  optionHandler, 
  wasCopied, 
  copyHandler 
}) {
  return (
    <section className="Case">
      <header className="Case__header">
        <Title order={3}>{name}</Title>
        <Button onClick={copyHandler}>
          {wasCopied ? 'Copied!' : 'Copy'}
        </Button>
      </header>
      {optionName &&
        <Checkbox
          label={optionName}
          checked={optionValue}
          onChange={optionHandler} 
        />
      }
      <Textarea
        value={text}
        readOnly 
        maxRows={4}
        minRows={4}
      />
    </section>
  )
}
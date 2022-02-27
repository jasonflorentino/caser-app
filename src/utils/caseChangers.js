import { 
  kebabCase as _kebabCase,
  snakeCase as _snakeCase,
  camelCase as _camelCase,
  startCase as _startCase,
} from "lodash";

import { 
  isSpace, 
  mapOverLines,
  wordsToChange,
} from './utils';

export function toKebabCase(str, ignoreBreak=false) {
  if (ignoreBreak) {
    return _kebabCase(str);
  } else {
    return mapOverLines(str, _kebabCase);
  }
}

export function toSnakeCase(str, ignoreBreak=false) {
  if (ignoreBreak) {
    return _snakeCase(str);
  } else {
    return mapOverLines(str, _snakeCase);
  }
}

export function toCamelCase(str, ignoreBreak=false) {
  if (ignoreBreak) {
    return _camelCase(str);
  } else {
    return mapOverLines(str, _camelCase);
  }
}

export function toPascalCase(str, ignoreBreak=false) {
  if (ignoreBreak) {
    return str.split(/\s/).map((word) => _startCase(word)).join("");
  } else {
    return mapOverLines(str, (line) => toPascalCase(line, true));
  }
}

export function toSentenceCase(str) {
  let out = ""
  let inSentence = false;
  let i = 0;

  while(i < str.length) {
    let c = str.charCodeAt(i)

    if (c === 33 || c === 46 || c === 63) { // ! / . / ?
      inSentence = false;
      out += str[i];
    } else if (c <= 47 // Spaces and other punctuation
      || (c >= 58 && c <= 64) 
      || (c >= 91 && c <= 96) 
      || (c >= 123 && c <= 126)
    ) {
      out += str[i];
    } else if (!inSentence) {
      inSentence = true;
      out += str[i].toUpperCase();
    } else {
      out += str[i];
    }
    i++
  }

  return out;
}

export function toTitleCaseAll(str) {
  let out = ""
  let inWord = false;
  let i = 0;

  while(i < str.length) {
    if (isSpace(str[i])) {
      inWord = false;
      out += str[i];
    } else if (inWord === false) {
      inWord = true;
      out += str[i].toUpperCase();
    } else {
      out += str[i];
    }
    i++
  }

  return out;
}

export function toTitleCase(str) {
  const toChange = wordsToChange(str);
  let s = str.slice();
  const re = {
    "a": /([ \t]+)(A)([ \t]+)/g,
    "an": /([ \t]+)(An)([ \t]+)/g,
    "and": /([ \t]+)(And)([ \t]+)/g,
    "at": /([ \t]+)(At)([ \t]+)/g,
    "but": /([ \t]+)(But)([ \t]+)/g,
    "by": /([ \t]+)(By)([ \t]+)/g,
    "for": /([ \t]+)(For)([ \t]+)/g,
    "nor": /([ \t]+)(Nor)([ \t]+)/g,
    "of": /([ \t]+)(Of)([ \t]+)/g,
    "on": /([ \t]+)(On)([ \t]+)/g,
    "or": /([ \t]+)(Or)([ \t]+)/g,
    "so": /([ \t]+)(So)([ \t]+)/g,
    "the": /([ \t]+)(The)([ \t]+)/g,
    "to": /([ \t]+)(To)([ \t]+)/g,
    "with": /([ \t]+)(With)([ \t]+)/g,
    "yet": /([ \t]+)(Yet)([ \t]+)/g,
  }

  for (let word in toChange) {
    if (toChange[word] === true) {
      s = s.replace(re[word], `$1${word}$3`)
    }
  }
  
  return s;
}
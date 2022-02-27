import { 
  kebabCase as _kebabCase,
  snakeCase as _snakeCase,
  camelCase as _camelCase,
  startCase as _startCase,
} from 'lodash';

export { 
  toTitleCaseAll, 
  toTitleCase,
  toKebabCase,
  toSnakeCase,
  toCamelCase,
  toPascalCase,
  toSentenceCase,
};

function toKebabCase(str, ignoreBreak=false) {
  if (ignoreBreak) {
    return _kebabCase(str);
  } else {
    return str.split('\n').map(_kebabCase).join('\n');
  }
}

function toSnakeCase(str, ignoreBreak=false) {
  if (ignoreBreak) {
    return _snakeCase(str);
  } else {
    return str.split('\n').map(_snakeCase).join('\n');
  }
}

function toCamelCase(str, ignoreBreak=false) {
  if (ignoreBreak) {
    return _camelCase(str);
  } else {
    return str.split('\n').map(_camelCase).join('\n');
  }
}

function toPascalCase(str, ignoreBreak=false) {
  if (ignoreBreak) {
    return str
      .trim()
      .split(/\s+/)
      .map(
        (word) => _startCase(
          word
            .replace(/\W/g, '')
            .toLowerCase()
        )
      )
      .join('');
  } else {
    return str.split('\n').map((line) => toPascalCase(line, true)).join('\n');
  }
}

function toSentenceCase(str) {
  let out = ""
  let inSentence = false;
  let i = 0;

  while(i < str.length) {
    let c = str.charCodeAt(i)
    if (c === 33 || c === 46 || c === 63) { // c == ! || . || ?
      inSentence = false;
      out += str[i];
    } else if (c <= 47 ||
              (c >= 58 && c <= 64) ||
              (c >= 91 && c <= 96) ||
              (c >= 123 && c <= 126)) {
      out += str[i];
    } else if (inSentence === false) {
      inSentence = true;
      out += str[i].toUpperCase();
    } else {
      out += str[i];
    }
    i++
  }

  return out;
}

function toTitleCaseAll(str) {
  let out = ""
  let inWord = false;
  let i = 0;
  const lettersNumbers = /[\w|\d]/;

  while(i < str.length) {
    if (!lettersNumbers.test(str[i])) {
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

function wordsToChange(str) {
  const words = {
    "a": false,
    "an": false,
    "and": false,
    "at": false,
    "but": false,
    "by": false,
    "for": false,
    "nor": false,
    "of": false,
    "on": false,
    "or": false,
    "so": false,
    "the": false,
    "to": false,
    "with": false,
    "yet": false,
  }

  let word = ""
  let i = 0;
  let inWord = false;

  while(i < str.length) {
    let c = str.charCodeAt(i)
    if (c > 32) {
      word += str[i];
      inWord = true;
    } else if (inWord) {
      let w = word.toLowerCase();
      if (w in words) words[w] = true;
      word = ""
      inWord = false;
    }
    i++
  }

  return words;
}

function toTitleCase(Str) {
  const toChange = wordsToChange(Str);
  let s = Str.slice();
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
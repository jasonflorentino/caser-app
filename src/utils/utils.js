export { toTitleCaseAll, 
         toTitleCase,
         toKebabCase,
         toSnakeCase,
         toCamelCase,
         toPascalCase,
         toSentenceCase
        };

function toKebabCase(str, ignoreBreak=false) {
  let out = ""
  let i = 0;
  while(i<str.length) {
    let c = str.charCodeAt(i)
    if (c === 10 && !ignoreBreak) out += str[i];
    else if (c <= 45 || 
             c === 47 ||
            (c >= 58 && c <= 64) ||
            (c >= 91 && c <= 96) ||
            (c >= 123 && c <= 126)) {
      out += "-";}
    else out += str[i].toLowerCase();
    i++
  }
  return out;
}

function toSnakeCase(str, ignoreBreak=false) {
  let out = ""
  let i = 0;
  while(i<str.length) {
    let c = str.charCodeAt(i)
    if (c === 10 && !ignoreBreak) out += str[i];
    else if (c <= 45 ||
             c === 47 ||
            (c >= 58 && c <= 64) ||
            (c >= 91 && c <= 96) ||
            (c >= 123 && c <= 126)) {
      out += "_";}
    else out += str[i].toLowerCase();
    i++
  }
  return out;
}

function toCamelCase(str, ignoreBreak=false) {
  let out = ""
  let inWord = false;
  let newLine = false;
  let i = 0;
  while(i<str.length) {
    let c = str.charCodeAt(i)
    if (c === 10 && !ignoreBreak) {
      out += str[i];
      inWord = false;
      newLine = true;}
    else if (inWord === false && 
            (newLine === true || i === 0)) {
      inWord = true;
      newLine = false;
      out += str[i].toLowerCase();}
    else if (c <= 45 ||
             c === 47 ||
            (c >= 58 && c <= 64) ||
            (c >= 91 && c <= 96) ||
            (c >= 123 && c <= 126)) {
      inWord = false;
      out += "";}
    else if (inWord === false) {
      inWord = true;
      out += str[i].toUpperCase();}
    else {
      out += str[i].toLowerCase();}
    i++
  }
  return out;
}

function toPascalCase(str, ignoreBreak=false) {
  let out = ""
  let inWord = false;
  let i = 0;
  while(i<str.length) {
    let c = str.charCodeAt(i)
    if (c === 10 && !ignoreBreak) {
      out += str[i];
      inWord = false;
    } else if (c <= 45 ||
               c === 47 ||
              (c >= 58 && c <= 64) ||
              (c >= 91 && c <= 96) ||
              (c >= 123 && c <= 126)) {
      inWord = false;
      out += "";
    }  else if (inWord === false) {
      inWord = true;
      out += str[i].toUpperCase();
    } else {
      out += str[i].toLowerCase();
    }
    i++
  }
  return out;
}

function toSentenceCase(str) {
  let out = ""
  let inSentence = false;
  let i = 0;
  while(i<str.length) {
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
  while(i<str.length) {
    let c = str.charCodeAt(i)
    if (c <= 32) {
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
  while(i<str.length) {
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
export { toTitleCaseAll, toTitleCase };

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
    "a": /(\s+)(A)(\s+)/g,
    "an": /(\s+)(An)(\s+)/g,
    "and": /(\s+)(And)(\s+)/g,
    "at": /(\s+)(At)(\s+)/g,
    "but": /(\s+)(But)(\s+)/g,
    "by": /(\s+)(By)(\s+)/g,
    "for": /(\s+)(For)(\s+)/g,
    "nor": /(\s+)(Nor)(\s+)/g,
    "of": /(\s+)(Of)(\s+)/g,
    "on": /(\s+)(On)(\s+)/g,
    "or": /(\s+)(Or)(\s+)/g,
    "so": /(\s+)(So)(\s+)/g,
    "the": /(\s+)(The)(\s+)/g,
    "to": /(\s+)(To)(\s+)/g,
    "with": /(\s+)(With)(\s+)/g,
    "yet": /(\s+)(Yet)(\s+)/g,
  }
  for (let word in toChange) {
    if (toChange[word] === true) {
      s = s.replace(re[word], `$1${word}$3`)
    }
  }
  return s;
}
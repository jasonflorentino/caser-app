export function isSpace(char) {
  return /\s/.test(char);
}

export function mapOverLines(str, fn) {
  return str.split('\n').map(fn).join('\n');
}

export function wordsToChange(str) {
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
    if (!isSpace(str[i])) {
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

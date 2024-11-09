function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function shiftChar(char, num) {
  if (!isAlpha(char)) return char;

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const charIndex = alphabet.indexOf(char.toUpperCase());

  if (char === char.toLowerCase()) {
    return charIndex > 22
      ? alphabet[charIndex + num - 26].toLowerCase()
      : alphabet[charIndex + num].toLowerCase();
  } else {
    return charIndex > 22
      ? alphabet[charIndex + num - 26]
      : alphabet[charIndex + num];
  }
}

export function caesarCipher(str, num) {
  const strToArr = [...str];
  return strToArr.map((char) => shiftChar(char, num)).join("");
}

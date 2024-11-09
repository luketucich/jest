// Capitalize Funciton
export function capitalize(string) {
  return string.slice(0, 1).toUpperCase().concat(string.toLowerCase().slice(1));
}

// Reverse String Function
export function reverseString(string) {
  return [...string].reverse().join("");
}

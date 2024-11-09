export function analyzeArray(arr) {
  return {
    average: arr.reduce((sum, currNum) => sum + currNum, 0) / arr.length,
    min: arr.reduce((smallestNum, currNum) => {
      return currNum < smallestNum ? currNum : smallestNum;
    }),
    max: arr.reduce((largestNum, currNum) => {
      return currNum > largestNum ? currNum : largestNum;
    }),
    length: arr.length,
  };
}

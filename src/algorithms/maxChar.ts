const checkLargest = (currentCount: number, highestCount: number): boolean => {
  return currentCount > highestCount;
};

const maxChar = (str: string): string | undefined => {
  const arr = str.toLowerCase().split("");
  let obj: { [index: string]: number } = {};

  let highestCount = 0;
  let highestCountIndex = undefined;

  arr.forEach((char: string) => {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
      if (checkLargest(obj[char], highestCount)) {
        highestCount = obj[char];
        highestCountIndex = char;
      }
    } else {
      obj[char] = 1;
      if (checkLargest(obj[char], highestCount)) {
        highestCount = obj[char];
        highestCountIndex = char;
      }
    }
  });
  return highestCountIndex;
};

export default maxChar;

const cleanString = (str: string): string =>
  str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

const anagrams = (strOne: string, strTwo: string): boolean => {
  return cleanString(strOne) === cleanString(strTwo);
};

export default anagrams;

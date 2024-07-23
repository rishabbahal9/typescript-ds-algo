const palindrome = (str: string): boolean => {
  const strReversed = str.split("").reverse().join("");
  return str.toLowerCase() === strReversed.toLowerCase();
};

export default palindrome;

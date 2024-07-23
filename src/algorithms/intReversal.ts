const intReversal = (n: number): number => {
  return parseInt(n.toString().split("").reverse().join(""));
};

export default intReversal;

const arrayChunking = (arr: number[], size: number): number[][] => {
  let pointer: number = 0;
  let finalArr: number[][] = [];
  while (pointer < arr.length) {
    const tempArr: number[] = [];
    for (let i: number = pointer; i < pointer + size && i < arr.length; i++) {
      tempArr.push(arr[i]);
    }
    finalArr.push(tempArr);
    pointer += size;
  }
  return finalArr;
};

export default arrayChunking;

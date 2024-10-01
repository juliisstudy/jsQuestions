type MultiDimesionalArray = (number | MultiDimesionalArray)[];

const flat = function (
  arr: MultiDimesionalArray,
  n: number
): MultiDimesionalArray {
  let res: MultiDimesionalArray = [];
  const flattening = (nums: MultiDimesionalArray, l: number) => {
    for (const num of nums) {
      if (Array.isArray(num) && l > 0 && l <= n) {
        flattening(num, l - 1);
      } else {
        res.push(num);
      }
    }
  };
  flattening(arr, n);
  return res;
};

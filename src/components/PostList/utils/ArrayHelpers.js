/**
 * Swap the elements in an array at indexes x and y.
 *
 * @param (a) The array.
 * @param (x) The index of the first element to swap.
 * @param (y) The index of the second element to swap.
 * @return {Array} The input array with the elements swapped.
 */
export const swapArrayElements = (a, x, y) => {
  console.log("initial array --", a, x);
  if (a.length === 1) return a;

  a.splice(y, 1, a.splice(x, 1, a[y])[0]);

  console.log("new array --", a);
  return a;
};

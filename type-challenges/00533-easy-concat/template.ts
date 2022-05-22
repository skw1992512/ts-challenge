type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

function concat(arr1: any, arr2: any) {
  return [...arr1, ...arr2];
}

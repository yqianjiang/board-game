export const getMatrixSum = (matrix: number[][]): number => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      sum += matrix[i][j] ?? 0;
    }
  }
  return sum;
};

export const sleep = async (t = 300) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, t);
  });
};

export const deepEqual = (arr1: any, arr2: any): boolean => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};
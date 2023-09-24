export type MatrixType = string | number;

const getNeighborIdx = (i: number, j: number): number[][] => {
  const getBox = (x: number) => Math.floor(x / 3);
  const di = getBox(i) * 3;
  const dj = getBox(j) * 3;
  return [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ].map((y) => [y[0] + di, y[1] + dj]);
};

const getNeighborVal = (
  matrix: MatrixType[][],
  i: number,
  j: number
): number[] => {
  const res: number[] = [];
  const neighbors = getNeighborIdx(i, j);
  for (const item of neighbors) {
    let [x, y] = item;
    res.push(+matrix[x][y]);
  }
  return res;
};

// 检查item在arr中是否已经存在
const checkScope = (
  arr: MatrixType[],
  item: number,
  candidateMode: boolean
) => {
  if (candidateMode) {
    return arr.includes(item);
  } else {
    return arr.filter((x) => +x === +item).length > 1;
  }
};

// 检测candidate能否填入matrix[i][j]
export const checkNumber = (
  matrix: MatrixType[][],
  i: number,
  j: number,
  candidate: number = 999
): boolean => {
  const candidateMode = candidate !== 999;
  const item = candidateMode ? candidate : +matrix[i][j];

  if (item === 0) return true;
  if (item > 9 || item < 1) return false;

  // 检查同一行、同一列、九宫格是否已经存在item
  if (
    checkScope(matrix[i], item, candidateMode) ||
    checkScope(
      matrix.map((x) => x[j]),
      item,
      candidateMode
    ) ||
    checkScope(getNeighborVal(matrix, i, j), item, candidateMode)
  ) {
    return false;
  }

  return true;
};

// 原地遍历，试试在每个格子填入数字，一旦不可行了就返回false撤回上一步操作
const trySolve = (matrix: number[][]): boolean => {
  for (const i in matrix) {
    for (let j = 0; j < matrix[i].length; j++) {
      // 不需要填入，直接下一格
      if (matrix[i][j] !== 0) {
        continue;
      }

      // 1-9，每个数字尝试一次
      for (let k = 1; k < 10; k++) {
        // 检查填入k是否可行，若可行，复制一份，在复制的基础上继续推演trySolve下一格
        if (checkNumber(matrix, +i, j, k)) {
          // 把第k个位置变为1 --> 填入数字k
          matrix[i][j] = k;
          if (trySolve(matrix)) {
            return true;
          }

          // 回溯
          matrix[i][j] = 0;
        }
      }
      // 试完还没填数字
      if (matrix[i][j] === 0) {
        return false;
      }
    }
  }
  return true; // 填好啦
};

export const solveSudoku = (
  initMatrix: MatrixType[][]
): undefined | number[][] => {
  const matrix = initMatrix.map((row) => {
    return row.map((item) => +item || 0);
  });

  const res = trySolve(matrix);

  if (res) {
    return matrix;
  }
};

// 检测某个matrix是否已解出
const checkSolve = (matrix: number[]): boolean => {
  return +matrix.join("") === 0;
};

// 翻转某一格的状态
const toggleItem = (
  matrix: number[],
  nCols: number,
  i: number,
  j: number
): void => {
  matrix[i] ^= 1 << (nCols - 1 - j);
};

const toggle = (
  matrix: number[],
  action: number[],
  nCols: number,
  i: number,
  j: number
): void => {
  toggleItem(action, nCols, i, j);
  const neighbors = [
    [0, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  for (const item of neighbors) {
    let [x, y] = item;
    x = x + i;
    y = y + j;
    if (x >= 0 && y >= 0 && x < matrix.length && y < nCols) {
      toggleItem(matrix, nCols, x, y);
    }
  }
};

// 根据第一行填充剩下的（根据matrix现有状态改变matrix，并记录在action中）
const complete = (matrix: number[], action: number[], nCols: number): void => {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < nCols; j++) {
      if ((matrix[i - 1] >> (nCols - 1 - j)) & 1) {
        // 若matrix[i - 1]从左到右的第j位是1
        toggle(matrix, action, nCols, i, j);
      }
    }
  }
};

const trySolve = (
  matrix: number[],
  action: number[],
  nCols: number,
  i: number,
  j: number,
  click: boolean
): number[][] => {
  if (click) {
    toggle(matrix, action, nCols, i, j);
  }

  if (j < nCols - 1) {
    return [
      ...trySolve([...matrix], [...action], nCols, i, j + 1, true),
      ...trySolve([...matrix], [...action], nCols, i, j + 1, false),
    ];
  } else {
    // 遍历到第一行的最后一个，可以补全剩余的
    complete(matrix, action, nCols);

    // 若有解，返回解
    return checkSolve(matrix) ? [action] : [];
  }
};

export const solve = (initMatrix?: number[][]): number[][] => {
  const nCols = initMatrix?.[0].length || 5;
  const matrix = initMatrix
    ? initMatrix.map((x) => parseInt(x.join(""), 2))
    : [31, 31, 31, 31, 31];
  const actions = initMatrix ? [initMatrix.map((x) => 0)] : [[0, 0, 0, 0, 0]];
  for (const click of [true, false]) {
    const action = trySolve([...matrix], [...actions[0]], nCols, 0, 0, click);
    if (action) {
      actions.push(...action);
    }
  }
  return actions.slice(1);
};

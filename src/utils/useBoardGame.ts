export const initBoard = (nRows: number, nCols: number): number[][] => {
  const res: number[][] = [];
  for (let i = 0; i < nRows; i++) {
    res[i] = [];
    for (let j = 0; j < nCols; j++) {
      res[i].push(0);
    }
  }
  return res;
};

// 共同： stateMatrix 和 reset()
// prevState 和 撤销（返回上一步）
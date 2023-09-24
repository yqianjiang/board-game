export const initBoard = (nRows: number, nCols: number, initNum: number | number[] = 0): number[][] => {
  const res: number[][] = [];
  for (let i = 0; i < nRows; i++) {
    res[i] = [];
    for (let j = 0; j < nCols; j++) {
      const num = typeof initNum === 'number' ? initNum : getInitNum(initNum);
      res[i].push(num);
    }
  }
  return res;
};

const getInitNum = (nums: number[]): number => {
  const n = nums.length;
  if ( n === 1) {
    return nums[0];
  } else {
    const idx = Math.floor(Math.random() * n);
    return nums[idx];
  }
}

// 共同： stateMatrix 和 reset()
// prevState 和 撤销（返回上一步）

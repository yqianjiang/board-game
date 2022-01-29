const neighbors = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

// 判断坐标 (r, c) 是否在网格中
function inArea(grid, r, c) {
  return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
}

const dfs = function (grid, r, c) {
  // 判断 base case
  // 如果坐标 (r, c) 超出了网格范围，直接返回
  if (!inArea(grid, r, c)) {
    return;
  }

  // 需要做的事情
  // 通常此处需要记录该节点曾被遍历——（1）改变状态以避开遍历条件；（2）加入到visited arr中

  // 访问相邻结点
  for (const [dr, dc] of neighbors) {
    dfs(grid, r + dr, c + dc);
  }
};

// 作者：nettee
// 链接：https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 对grid做一些事情...
const doSthGrid = function (grid) {
  for (const i in grid) {
    for (const j in grid[i]) {
      // do sth.
      dfs(grid, i, j);
    }
  }
  return res;
};

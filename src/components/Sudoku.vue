<template>
  <div class="game-wrap">
    <h1>数独</h1>
    <div class="row" v-for="(rowState, i) in stateMatrix" :key="rowState">
      <input
        class="toggle-box"
        v-for="(state, j) in rowState"
        :key="state"
        :class="{
          'toggle-box--highlight': state > 0,
          'toggle-box--error': errorMatrix[i][j],
        }"
        v-model="rowState[j]"
        type="number"
        min="1"
        max="9"
      />
    </div>
    <button @click="reset">重置</button>
    <button @click="solve(stateMatrix)">解答</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { initBoard } from "@/utils/useBoardGame";

const getNeighborVal = (matrix: number[][], i: number, j: number): number[] => {
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
  const res: number[] = [];
  const neighbors = getNeighborIdx(i, j);
  for (const item of neighbors) {
    let [x, y] = item;
    res.push(matrix[x][y]);
  }
  return res;
};
const checkNumber = (
  matrix: number[][],
  i: number,
  j: number,
  candidate: number | null = null
): boolean => {
  const item = candidate || matrix[i][j];
  if (item === 0) return false;
  if (item > 9 || item < 0) return true;
  const checkScope = (arr: number[]) => {
    if (arr.filter((x) => x === item).length > 1) {
      return true;
    }
  };

  // 检查同一行
  if (
    checkScope(matrix[i]) ||
    checkScope(matrix.map((x) => x[j])) ||
    checkScope(getNeighborVal(matrix, i, j))
  ) {
    return true;
  }

  return false;
};

export default defineComponent({
  props: {
    properties: Object,
  },
  setup() {
    const [N_ROWS, N_COLS] = [9, 9];
    const stateMatrix = ref(initBoard(N_ROWS, N_COLS));
    const possibleMatrix = stateMatrix.value.map((x) => {
      return x.map((y) => [0]);
    });

    // stateMatrix.value = presetMatrix.value;
    const errorMatrix = computed(() => {
      return stateMatrix.value.map((x, i) => {
        return x.map((y, j) => {
          const res = checkNumber(stateMatrix.value, i, j);
          return res;
        });
      });
    });
    const reset = () => {
      stateMatrix.value = initBoard(N_ROWS, N_COLS);
    };
    const solve = (matrix: number[][]) => {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] != undefined && !matrix[i][j]) {
            let candidate = 1;
            let error = true;
            while (candidate <= 9 && error) {
              matrix[i][j] = candidate;
              error = checkNumber(stateMatrix.value, i, j);
              if (!error) {
                possibleMatrix[i][j].push(candidate);
              }
              candidate++;
            }
            if (candidate > 9) {
              matrix[i][j] = 0;
              console.log("前面有错");
            }
          }
        }
      }
    };
    return { stateMatrix, reset, errorMatrix, solve };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.game-wrap {
  border: solid 1px #666;
  padding: 10px;
  text-align: center;
}
.toggle-box {
  flex: 1;
  border: solid 1px #666;
  height: 30px;
  width: 30px;
  &--highlight {
    background: rgb(238, 245, 141);
  }
  &--error {
    border-color: red;
    color: red;
  }
}
</style>

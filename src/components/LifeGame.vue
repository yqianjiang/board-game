<template>
  <div class="game-wrap">
    <h1>生命游戏</h1>
    <div class="row" v-for="(rowState, i) in stateMatrix" :key="rowState">
      <div
        class="toggle-box"
        v-for="(state, j) in rowState"
        :key="state"
        :name="`${i},${j}`"
        :class="{ 'toggle-box--dead': state === 0 }"
        @click="toggle(i, j)"
      ></div>
    </div>
    <button @click="start">开始</button>
    <button @click="stop = true">停止</button>
    <button @click="goNext">下一步</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";
import { initBoard } from "@/utils/useBoardGame";
import { getMatrixSum, sleep, deepEqual } from "@/utils/utils";

const gameOfLife = function (board: number[][]) {
  const sum = function (board: number[][], mid_i: number, mid_j: number) {
    let res = 0;
    for (let i = Math.max(0, mid_i - 1); i <= mid_i + 1; i++) {
      for (let j = Math.max(0, mid_j - 1); j <= mid_j + 1; j++) {
        res += board[i]?.[j] ?? 0;
      }
    }
    return res;
  };
  const res: number[][] = [];
  const nRows = board.length; // m >= 1
  const nCols = board[0].length; // n <= 25

  for (let i = 0; i < nRows; i++) {
    res[i] = [];
    for (let j = 0; j < nCols; j++) {
      if (board[i][j] === 0) {
        res[i].push(sum(board, i, j) === 3 ? 1 : 0);
      } else {
        const curSum = sum(board, i, j) - 1;
        res[i].push(curSum === 3 || curSum === 2 ? 1 : 0);
      }
    }
  }

  return res;
};

export default defineComponent({
  props: {
    properties: Object,
  },
  setup(props) {
    const boardSize = computed(() => {
      return [
        props.properties?.nRows.default || 9,
        props.properties?.nCols.default || 9,
      ];
    });
    const stateMatrix = ref([[0]]);
    const prevState = ref([[0]]);
    const stop = ref(false);
    const goNext = () => {
      prevState.value = stateMatrix.value;
      stateMatrix.value = gameOfLife(stateMatrix.value);
    };
    const start = async () => {
      stop.value = false;

      while (
        getMatrixSum(stateMatrix.value) > 0 &&
        !deepEqual(prevState.value, stateMatrix.value) &&
        !stop.value
      ) {
        console.log(1);
        goNext();
        await sleep(props.properties?.speed.default);
      }
    };
    const toggle = (i: number, j: number) => {
      stateMatrix.value[i][j] = +!stateMatrix.value[i][j];
    };
    const reset = () => {
      stop.value = true;
      const [N_ROWS, N_COLS] = boardSize.value;
      stateMatrix.value = initBoard(N_ROWS, N_COLS);
    };
    watchEffect(reset);

    return { stateMatrix, goNext, start, toggle, reset, stop };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.toggle-box {
  flex: 1;
  border: solid 1px #666;
  height: 15px;
  width: 15px;
  background: rgb(238, 245, 141);
  &--dead {
    background: rgb(70, 70, 70);
  }
}
</style>

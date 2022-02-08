<template>
  <div class="game-wrap">
    <h1>关灯游戏</h1>
    <div class="row" v-for="(rowState, i) in stateMatrix" :key="rowState">
      <div
        class="toggle-box"
        v-for="(state, j) in rowState"
        :key="i + j"
        :class="{
          'toggle-box--dead': state === 0,
        }"
        @click="toggle(i, j)"
      ></div>
    </div>
    <button @click="reset">重置</button>
    <button @click="init">随机开局</button>
    <button @click="complete">自动填充</button>
    <button @click="autoSolve" v-if="solutions[0][0][0]">自动解答</button>
    <button @click="showSolution" v-else>显示答案</button>
    <div class="history-text">操作历史{{ "\n" + history.join("\n") }}</div>
    <div class="history-text" v-if="solutions[0][0][0]">
      <div>参考答案</div>
      <div v-for="solution in solutions" :key="solution">
        {{ solution.join("\n") + "\n---\n" }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { initBoard } from "@/utils/useBoardGame";
import { solve } from "@/utils/solveLightGame";

export default defineComponent({
  props: {
    properties: Object,
  },
  setup() {
    const [N_ROWS, N_COLS] = [5, 5];
    const stateMatrix = ref(initBoard(N_ROWS, N_COLS, 1));
    const history = ref(initBoard(N_ROWS, N_COLS));
    const solutions = ref([[[""]]]);
    const neighbors = [
      [0, 0],
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ];
    const toggle = (i: number, j: number) => {
      history.value[i][j] = history.value[i][j] ? 0 : 1;
      for (const item of neighbors) {
        let [x, y] = item;
        x = x + i;
        y = y + j;
        if (x >= 0 && y >= 0 && x < N_ROWS && y < N_COLS) {
          stateMatrix.value[x][y] = +!stateMatrix.value[x][y];
        }
      }
    };
    const reset = () => {
      history.value = initBoard(N_ROWS, N_COLS);
      stateMatrix.value = initBoard(N_ROWS, N_COLS, 1);
      solutions.value = [[[""]]];
    };
    const init = () => {
      reset();
      // 随机开局，不一定有解
      let matrix = initBoard(N_ROWS, N_COLS, [0, 1]);
      let res = solve(matrix);
      while (!res[0]) {
        matrix = initBoard(N_ROWS, N_COLS, [0, 1]);
        res = solve(matrix);
      }
      stateMatrix.value = matrix;
    };

    // 根据第一行填充剩下的
    const complete = () => {
      for (let i = 1; i < stateMatrix.value.length; i++) {
        for (const j in stateMatrix.value[i]) {
          if (stateMatrix.value[i - 1][j]) {
            toggle(i, +j); // 目标让值为0
          }
        }
      }
    };
    const showSolution = () => {
      const res = solve(stateMatrix.value);
      if (res[0]) {
        solutions.value = res.map((x) =>
          x.map((y) => {
            let yy = y.toString(2);
            while (yy.length < stateMatrix.value[0].length) {
              yy = "0" + yy;
            }
            return yy.split("");
          })
        );
      } else {
        console.log("此局无解");
      }
    };
    const autoSolve = () => {
      const A = solutions.value[0];
      for (let i = 0; i < stateMatrix.value.length; i++) {
        for (const j in stateMatrix.value[i]) {
          if (A[i][+j] == "1") {
            toggle(i, +j);
          }
        }
      }
    };
    return {
      stateMatrix,
      toggle,
      reset,
      init,
      complete,
      showSolution,
      autoSolve,
      history,
      solutions,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.toggle-box {
  flex: 1;
  border: solid 1px #666;
  height: 30px;
  width: 50px;
  background: rgb(238, 245, 141);
  &--dead {
    background: rgb(70, 70, 70);
  }
}
.history-text {
  white-space: pre-wrap;
}
</style>

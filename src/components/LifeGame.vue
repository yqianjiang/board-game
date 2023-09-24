<template>
  <div class="game-wrap">
    <h1>生命游戏</h1>
    <p>欢迎来到生命游戏自定义版！这是一个基于细胞自动机理论的益智游戏，让你在虚拟世界中观察生命的演化和变化。生命游戏起初由英国数学家约翰·康威于1970年创造，如今你可以在这里自定义初始模式并探索生命的奇妙之旅。</p>
    <p>游戏玩法说明：<button @click="showIntro = !showIntro">{{ showIntro ? "收起" : "查看" }}</button></p>
    <template v-if="showIntro">
      <p><strong>初始模式设置：</strong>
  在游戏开始时，你可以自由绘制一个初始的细胞模式。这些细胞可以是活的（表示为亮色）或死的（表示为暗色）。用你的创造力，设计一个独特的初始模式，然后点击“演化”来看看它将如何发展演化。</p>
  <p><strong>演化规则：</strong>游戏中的每一轮演化都根据以下规则进行：
  
  活细胞周围有2或3个相邻的活细胞，它将继续存活。
  活细胞周围有过多的相邻活细胞（超过3个），它将死亡，模拟“过度拥挤”。
  死细胞周围有3个相邻的活细胞，它将复活，模拟“繁殖”。</p>
  <p><strong>观察演化：</strong>点击“演化”后，游戏将自动进行细胞演化。观察细胞群体如何变化，有时会形成有趣的图案、结构或者稳定的生命形式。如果你的模式最终死绝，可以尝试不同的起始模式，看看是否能够找到一个更稳定的生命形式。</p>
    </template>
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
    <div class="stack btn-group">
      <button @click="start">演化</button>
      <button @click="stop = true">暂停</button>
      <button @click="goNext">演化一步</button>
      <button @click="reset">重置</button>
    </div>
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
    const showIntro = ref(false);
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

    return { stateMatrix, goNext, start, toggle, reset, stop, showIntro };
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
.btn-group {
  margin-top: 12px;
}
</style>

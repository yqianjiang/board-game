<template>
  <div class="game-wrap">
    <h1>数独</h1>
    <p>请在每行、每列和每个小九宫格内填入1到9的数字，并确保每个数字不重复出现。</p>
    <div class="stack">
      <label
        >难度：
        <select v-model="level">
          <option value="1">非常简单</option>
          <option value="2">简单</option>
          <option value="3">普通</option>
          <option value="4">困难</option>
          <option value="5">非常困难</option>
          <option value="6">空白</option>
        </select> </label
      ><button @click="init">应用</button>
              <!-- 暂停/继续按钮 -->
              <button
          v-if="gameState === 'over'"
          @click="startGame"
        >
          开始
        </button>
        <button
          v-if="gameState === 'running'"
          @click="pausedGame"
        >
          暂停
        </button>
        <button
          v-else-if="gameState === 'paused'"
          @click="resumeGame"
        >
          继续
        </button>
        <!-- 重新开始按钮 -->
        <button
          v-if="gameState !== 'over'"
          @click="restartGame"
        >
          开新的一局
        </button>
      <div>累计用时：{{ timeCounter }}</div>
    </div>
    <div class="row" v-for="(rowState, i) in stateMatrix" :key="i">
      <input
        class="toggle-box"
        v-for="(state, j) in rowState"
        :key="j"
        :class="{
          'toggle-box--error': errorMatrix[i][j],
          'toggle-box--box-top': i === 0 || i === 3 || i === 6,
          'toggle-box--box-left': j === 0 || j === 3 || j === 6,
          'toggle-box--box-bottom': i === 8,
          'toggle-box--box-right': j === 8,
        }"
        v-model.number="stateMatrix[i][j]"
        type="number"
        :disabled="!!originState[i][j]"
      />
    </div>
    <div class="btn-wrap">
      <button @click="reset">清空重来</button>
      <button @click="findAllSolve">提示</button>
      <button @click="solve">解答</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useTimer } from "@/utils/useTimer";
import { initBoard } from "@/utils/useBoardGame";
import { checkNumber, solveSudoku } from "@/utils/solveSudoku";
import type { MatrixType } from "@/utils/solveSudoku";
import { solveSudokuAll } from "@/utils/solveSudokuAll";

const getRandomInt = (range = 9, scale = 1): number => {
  return Math.floor((Math.random() * range) / scale);
};

const initSudokuBoard = () => {
  const matrix = initBoard(9, 9);
  // 把第一行乱序填入1-9
  for (let k = 1; k < 10; k++) {
    // 随机选一个格子填数
    let j = getRandomInt();
    while (matrix[0][j] > 0) {
      // 重新选格子
      j = getRandomInt();
    }
    matrix[0][j] = k;
  }

  return matrix;
};

export default defineComponent({
  props: {
    properties: Object,
  },
  setup() {
    const { restartTimer, stopTimer, resumeTimer, timeCounter } = useTimer();
    const [N_ROWS, N_COLS] = [9, 9];
    const level = ref(3);
    const gameState = ref("over");
    const stateMatrix = ref<MatrixType[][]>(initBoard(N_ROWS, N_COLS));
    const originState = ref(stateMatrix.value);
    const errorMatrix = computed(() => {
      return stateMatrix.value.map((x, i) => {
        return x.map((y, j) => {
          const res = !checkNumber(stateMatrix.value, i, j);
          return res;
        });
      });
    });

    const reset = () => {
      restartTimer();
      stateMatrix.value = originState.value.map((x) => x.map((y) => y));
    };

    const startGame = () => {
      gameState.value = "running";
      restartTimer();
    };

    const pausedGame = () => {
      gameState.value = "paused";
      stopTimer();
    };

    const resumeGame = () => {
      gameState.value = "running";
      resumeTimer();
    };

    const restartGame = () => {
      stopTimer();
      init();
      startGame();
    };

    const init = () => {
      const start = new Date().getTime();

      // 随机开局，不一定有解 (基本上有解)
      let matrix = initSudokuBoard();
      let res = solveSudoku(matrix);
      let count = 1;
      while (!res && count < 5) {
        matrix = initSudokuBoard();
        res = solveSudoku(matrix);
        count++;
      }
      if (res) {
        stateMatrix.value = res.map((x) =>
          x.map((y) => (getRandomInt(6, +level.value) ? y : ""))
        ); // 可以在res的基础上挖空
      } else {
        stateMatrix.value = matrix;
      }
      originState.value = stateMatrix.value.map((x) => x.map((y) => y));
      // restartTimer();

      if (count > 1) {
        console.log(count);
        console.log("loaded, 用时", new Date().getTime() - start);
      }
    };

    init();
    stopTimer();

    const solve = () => {
      const res = solveSudoku(originState.value);
      if (res) {
        stateMatrix.value = res;
      } else {
        console.log("此题无解");
      }
    };

    const findAllSolve = () => {
      solveSudokuAll(stateMatrix.value);
    };

    const handleFinish = () => {
      // 解答完成，本局结束
      stopTimer();
      console.log('解答完成！')
    };

    // 数字填完自动停止计时
    watch(
      stateMatrix,
      () => {
        for (const row of stateMatrix.value) {
          for (const item of row) {
            // 还有空格，未完成
            if (!item) {
              return;
            }
          }
        }
        if (errorMatrix.value.join("").includes("true")) {
          console.log("还有错！");
        } else {
          handleFinish();
        }
      },
      { deep: true }
    );

    return {
      level,
      timeCounter,
      originState,
      stateMatrix,
      errorMatrix,
      init,
      reset,
      solve,
      findAllSolve,
      gameState,
      startGame,
      pausedGame,
      resumeGame,
      restartGame,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.stack {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.toggle-box {
  flex: 1;
  box-sizing: border-box;
  border: solid 1px #999;
  border-radius: 0;
  height: 30px;
  width: 30px;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: rgb(38, 18, 221);
  &:disabled {
    color: black;
    background: rgb(231, 231, 231);
  }
  &--box-top {
    border-top-color: black;
    border-top-width: 2px;
  }
  &--box-left {
    border-left-color: black;
    border-left-width: 2px;
  }
  &--box-bottom {
    border-bottom-color: black;
    border-bottom-width: 2px;
  }
  &--box-right {
    border-right-color: black;
    border-right-width: 2px;
  }
  &--error {
    border-color: red;
    color: red;
  }
}
.btn-wrap {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 12px;
}
</style>

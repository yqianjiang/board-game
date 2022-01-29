<template>
  <div class="game-wrap">
    <h1>关灯游戏</h1>
    <div class="row" v-for="(rowState, i) in stateMatrix" :key="rowState">
      <div
        class="toggle-box"
        v-for="(state, j) in rowState"
        :key="i + j"
        :class="{ 'toggle-box--dead': state === 1 }"
        @click="toggle(i, j)"
      ></div>
    </div>
    <button @click="reset">重置</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { initBoard } from "@/utils/useBoardGame";

export default defineComponent({
  props: {
    properties: Object,
  },
  setup() {
    const [N_ROWS, N_COLS] = [5, 5];
    const stateMatrix = ref(initBoard(N_ROWS, N_COLS));
    const neighbors = [
      [1, 0],
      [0, 1],
      [0, 0],
      [-1, 0],
      [0, -1],
    ];
    const toggle = (i: number, j: number) => {
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
      stateMatrix.value = initBoard(N_ROWS, N_COLS);
    };
    return { stateMatrix, toggle, reset };
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
</style>

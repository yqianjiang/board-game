<template>
  <div id="dynamic-component-demo" class="demo">
    <button
      v-for="(tab, idx) in tabs"
      :key="tab.text"
      :class="['tab-button', { active: currentTab === idx }]"
      @click="currentTab = idx"
    >
      {{ tab.text }}
    </button>

    <!-- Inactive components will be cached! -->
    <keep-alive>
      <component
        :is="currentTabComponent.name"
        :properties="currentTabComponent.properties"
      >
      </component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, computed } from "vue";

export default defineComponent({
  components: {
    LifeGame: defineAsyncComponent(() => import("./components/LifeGame.vue")),
    LightGame: defineAsyncComponent(() => import("./components/LightGame.vue")),
    Sudoku: defineAsyncComponent(() => import("./components/Sudoku.vue")),
    Tetris: defineAsyncComponent(() => import("./components/Tetris.vue")),
  },
  setup() {
    const currentTab = ref(0);
    const tabs = ref([
      {
        text: "生命游戏",
        name: "LifeGame",
        properties: {
          nRows: {
            title: "行数",
            type: "number",
            default: 19,
          },
          nCols: {
            title: "列数",
            type: "number",
            default: 19,
          },
          speed: {
            title: "每步间隔时间(单位ms)",
            type: "number",
            default: 200,
          },
        },
      },
      { text: "关灯游戏", name: "LightGame", properties: {} },
      { text: "数独", name: "Sudoku", properties: {} },
      { text: "俄罗斯方块", name: "Tetris", properties: {} },
    ]);
    const currentTabComponent = computed(() => {
      return tabs.value[currentTab.value];
    });
    return { currentTab, currentTabComponent, tabs };
  },
});
</script>

<style lang="scss">
.demo {
  font-family: sans-serif;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.game-wrap {
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  text-align: center;
}
.row {
  display: flex;
}
.stack {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
</style>

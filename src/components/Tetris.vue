<template>
  <div class="game-wrap">
    <h1>俄罗斯方块</h1>
    <p>请通过方向键控制下落的方块（方向键“上”可以顺时针旋转方块），使它们在底部排列成完整的水平行，一旦一行被填满，就会消失并腾出空间。目标是尽可能堆叠方块，避免屏幕顶部被方块堆满。</p>
    <div class="stack toolbar">
      <span>当前分数：{{score}}</span>
      <span>最高得分：{{ highScore }}</span>
      <div>游戏速度：<input :disabled="gameState!=='over'" v-model="speed" type="number"></div>
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
          重新开始
        </button>
    </div>

    <div class="game-main">
      <div class="grid">
        <div v-for="(row, idx) in combinedGrid" :key="idx" class="row">
          <div v-for="(cell, j) in row" :key="j" class="cell" :class="{ 'color-1': cell === 'active'}"></div>
        </div>
      </div>
      <div class="next-piece">
        <p>Next piece: </p>
        <div v-for="row in nextPiece" :key="row[0]" class="row">
          <div v-for="cell in row" :key="cell" class="cell" :class="{ 'color-1': cell}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, computed } from 'vue'
import Tetris from '@/utils/TetrisBoard'

const [N_ROWS, N_COLS] = [20, 10];
const tetris = new Tetris(N_ROWS, N_COLS);

export default {
  name: 'Tetris',
  setup() {
    // Create a reactive state object
    const state = reactive({
      grid: tetris.createGrid(N_ROWS, N_COLS),
      piece: tetris.createPiece(),
      pieceX: (N_COLS / 2) - 2,
      pieceY: 0,
      nextPiece: tetris.createPiece(),
      score: 0,
      gameState: 'over',   // 'over' 未开始， 'running' 进行中， 'paused' 暂停中
      speed: 3,
      highScore: 0,
    })

    let interval: any = null;

    // Convert the state object to a set of references
    // that can be used in the template
    const stateRefs = toRefs(state)
    
    // Define a computed property for the active piece
    const combinedGrid = computed(() => {
      // Create a new piece array
      const grid_: (string|null)[][] = state.grid.map(x=>[...x]);
      
      if (state.gameState==='over') return grid_;

      // Loop through each row in the state piece
      for (let row = 0; row < state.piece.length; row++) {
        // Loop through each cell in the row
        for (let cell = 0; cell < state.piece[row].length; cell++) {
          // Check if the cell is occupied
          if (state.piece[row][cell] === 1) {
            // Add the active class to the cell
            grid_[state.pieceY + row][state.pieceX + cell] = 'active'
          }
        }
      }
      
      // Return the new active piece
      return grid_
    })

    const startGame = () => {
      state.gameState = 'running';
      state.piece = state.nextPiece;
      state.nextPiece = tetris.createPiece();
      // start the game loop
      interval = setInterval(update, Math.floor(2000/state.speed))
      // 监听玩家的按键操作
      document.addEventListener('keydown', handleKeydown);
    }

    const pausedGame = () => {
      state.gameState = 'paused';

      // 清除定时器
      clearInterval(interval);

      // 移除玩家的按键操作监听器
      document.removeEventListener('keydown', handleKeydown);
    }

    const resumeGame = () => {
      state.gameState = 'running';

      // 重新设置定时器
      interval = setInterval(update, Math.floor(2000/state.speed))

      // 监听玩家的按键操作
      document.addEventListener('keydown', handleKeydown);
    }

    const restartGame = () => {
      state.gameState = 'over';
      
      if (state.score > state.highScore) {
        state.highScore = state.score;
      }

      // Reset the game
      state.grid = tetris.createGrid(N_ROWS, N_COLS)
      state.piece = tetris.createPiece()
      state.pieceX = 0
      state.pieceY = 0
      state.nextPiece = tetris.createPiece()
      state.score = 0


      // 清除定时器
      clearInterval(interval);

      // 移除玩家的按键操作监听器
      document.removeEventListener('keydown', handleKeydown);
    }
    
    // Define a function to update the game state
    const update = () => {
      if (state.gameState !== 'running') return;

      // Check if the piece can move down
      if (tetris.canMoveTo(state.grid, state.piece, state.pieceX, state.pieceY + 1)) {
        // Move the piece down
        tetris.moveTo(state, state.grid, state.piece, state.pieceX, state.pieceY + 1)
      } else {
        // Check if the game is over
        if (state.pieceY <= 0) {          
          // Show the game over message
          alert('游戏结束！')
          restartGame()
        } else {
          // Add the piece to the grid
          tetris.addToGrid(state.grid, state.piece, state.pieceX, state.pieceY)
          
          // Remove any full rows and increase the score
          state.score += tetris.removeRows(state.grid)
          
          // Create a new piece
          state.piece = state.nextPiece
          state.pieceX = N_COLS / 2 - 2
          state.pieceY = 0
          state.nextPiece = tetris.createPiece()
        }
      }
      
    }
    
    const controls = {
      moveLeft: () => {
        // Check if the piece can move left
        if (tetris.canMoveTo(state.grid, state.piece, state.pieceX - 1, state.pieceY)) {
          // Move the piece left
          tetris.moveTo(state, state.grid, state.piece, state.pieceX - 1, state.pieceY)
        }
      },
      moveRight: () => {
        // Check if the piece can move right
        if (tetris.canMoveTo(state.grid, state.piece, state.pieceX + 1, state.pieceY)) {
          // Move the piece right
          tetris.moveTo(state, state.grid, state.piece, state.pieceX + 1, state.pieceY)
        }
      },
      moveDown: () => {
        // Check if the piece can move down
        if (tetris.canMoveTo(state.grid, state.piece, state.pieceX, state.pieceY + 1)) {
          // Move the piece down
          tetris.moveTo(state, state.grid, state.piece, state.pieceX, state.pieceY + 1)
        }
      },
      rotate: () => {
        // Rotate the piece
        state.piece = tetris.rotate(state.piece)
        
        // Check if the new piece position is valid
        if (!tetris.canMoveTo(state.grid, state.piece, state.pieceX, state.pieceY)) {
          // Revert the rotation
          state.piece = tetris.rotate(state.piece)
          state.piece = tetris.rotate(state.piece)
          state.piece = tetris.rotate(state.piece)
        }
      }
    }

    const handleKeydown = (event: KeyboardEvent) => {
        event.preventDefault();
        switch (event.key) {
          case 'ArrowLeft':
            controls.moveLeft();
            break
            
          case 'ArrowRight':
            controls.moveRight();
            break
            
          case 'ArrowDown':
            controls.moveDown();
            break
            
          case 'ArrowUp':
            controls.rotate();
            break
        }
    }

    return {
      ...stateRefs,
      combinedGrid,
      startGame,
      pausedGame,
      resumeGame,
      restartGame,
    }
  }
}
</script>

<style scoped>
.game-main {
  margin-top: 12px;
  position: relative;
  display: flex;
}

.next-piece {
  position: absolute;
  top: 0;
  left: 0;
}

.grid {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.row {
  display: flex;
  width: 100%;
}

.cell {
  height: 20px;
  width: 20px;
  background-color: rgb(203, 203, 203);
  border: solid 1px rgb(186, 186, 227);
}

/* .piece-cell {
  height: 20px;
  width: 20px;
  border: solid 1px rgb(186, 186, 227);
} */

.color-1 {
  background-color: #00f;
}

.color-2 {
  background-color: #0f0;
}

.color-3 {
  background-color: #f00;
}

.color-4 {
  background-color: #ff0;
}

.color-5 {
  background-color: #f0f;
}

.color-6 {
  background-color: #0ff;
}

.color-7 {
  background-color: #fff;
}
/*
.active {
  background-color: #333;
  border: 1px solid #555;
} */
</style>

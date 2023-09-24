// Define the grid data type
type Grid = (string | null)[][];

// Define the type for a piece（是一个代表俄罗斯方块的二维数组）
type Piece = number[][];

// Define the possible piece types
const PIECE_TYPES = [
  [
    [1, 1],
    [1, 1],
  ],
  [
    [0, 1, 0],
    [1, 1, 1],
  ],
  [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ],
  [
    [1, 1, 1],
    [0, 1, 0],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  [
    [1],
    [1],
    [1],
    [1],
  ],
];

export default class Tetris {
  grid: Grid;

  constructor(n_rows: number, n_cols: number) {
    this.grid = this.createGrid(n_rows, n_cols);
  }

  // Define a function to create the initial grid
  createGrid(n_rows: number, n_cols: number): Grid {
    // Create an empty grid
    const grid: Grid = [];

    // Loop through each row
    for (let row = 0; row < n_rows; row++) {
      // Create an empty row
      grid[row] = [];

      // Loop through each cell in the row
      for (let cell = 0; cell < n_cols; cell++) {
        // Add an empty cell
        grid[row][cell] = "";
      }
    }

    // Return the grid
    return grid;
  }

  // Define a function to create a random piece
  createPiece(): Piece {
    // Select a random piece type
    const type = Math.floor(Math.random() * PIECE_TYPES.length);

    // Return the selected piece type
    return PIECE_TYPES[type];
  }

  // Define a function to check if a piece can move to a new position
  canMoveTo(grid: Grid, piece: number[][], x: number, y: number): boolean {
    const ignore = piece;
    // Loop through each row in the piece
    for (let row = 0; row < piece.length; row++) {
      // Loop through each cell in the row
      for (let cell = 0; cell < piece[row].length; cell++) {
        // Check if the cell is occupied
        if (piece[row][cell] === 1) {
          const targetBoardX = x + cell;
          const targetBoardY = y + row;
          // Check if the new position is outside the grid
          if (targetBoardX < 0 || targetBoardX >= grid[0].length || targetBoardY >= grid.length) {
            console.log("can't move because outside the grid")
            return false;
          }

          // Check if the new position is already occupied
          if (targetBoardY >= 0 && grid[targetBoardY][targetBoardX] !== "") {
            console.log("can't move because occupied:", targetBoardY, targetBoardX)
            return false;
          }
        }
      }
    }

    // The piece can move to the new position
    return true;
  }

  // Define a function to remove a piece from the grid
  removeFromGrid(grid: Grid, piece: Piece, x: number, y: number): void {
    // Loop through each row in the piece
    for (let row = 0; row < piece.length; row++) {
      // Loop through each cell in the row
      for (let cell = 0; cell < piece[row].length; cell++) {
        // Check if the cell is occupied
        if (piece[row][cell] === 1) {
          // Remove the cell from the grid
          grid[y + row][x + cell] = "";
        }
      }
    }
  }

  // Define a function to add a piece to the grid
  addToGrid(grid: Grid, piece: Piece, x: number, y: number): void {
    // Loop through each row in the piece
    for (let row = 0; row < piece.length; row++) {
      // Loop through each cell in the row
      for (let cell = 0; cell < piece[row].length; cell++) {
        // Check if the cell is occupied
        if (piece[row][cell] === 1) {
          // Add the cell to the grid
          grid[y + row][x + cell] = "active";
        }
      }
    }
  }

  // Define a function to move a piece to a new position
  moveTo(state: any, grid: Grid, piece: Piece, x: number, y: number): void {
    // Remove the piece from the grid
    // this.removeFromGrid(grid, piece, state.pieceX, state.pieceY);
    
    // Update the piece position
    state.pieceX = x;
    state.pieceY = y;
    
    // Add the piece to the grid
    // this.addToGrid(grid, piece, x, y);
  }

  // Define a function to rotate a piece clockwise
  rotate(piece: number[][]): number[][] {
    // Create a new piece array
    const newPiece: number[][] = [];

    // Loop through each cell in the piece
    for (let cell = 0; cell < piece[0].length; cell++) {
      // Create a new row in the new piece array
      newPiece[cell] = [];

      // Loop through each row in the piece
      for (let row = piece.length - 1; row >= 0; row--) {
        // Add the cell to the new row
        newPiece[cell].push(piece[row][cell]);
      }
    }

    // Return the rotated piece
    return newPiece;
  }

  // Define a function to remove any full rows
  removeRows(grid: Grid): number {
    let scoresIncrement = 0;
    // Loop through each row in the grid
    for (let row = 0; row < grid.length; row++) {
      // Check if the row is full
      if (grid[row].every((cell) => cell !== "")) {
        // Remove the row
        grid.splice(row, 1);
        scoresIncrement += 10;

        // Add a new empty row at the top
        grid.unshift(new Array(10).fill(""));
      }
    }
    return scoresIncrement;
  }
}

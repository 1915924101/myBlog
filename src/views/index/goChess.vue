<template>
  <div class="game">
    <div>
      <div style="text-align: center;font-size: 20px;">AI机器人围棋算法,欢迎挑战   <router-link to="/" style="color: blueviolet;">返回首页</router-link></div>
    <canvas ref="canvas" width="670" height="670" @click="handleClick"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ctx: null,
      board: null,
      player: 1,
      gameOver: false,
      lastMoves: [],
      result: "",
      scores: [0, 0],
      size: 19,
    };
  },
  computed: {
    // 棋盘是否已满
    isFull() {
      return this.board.every((row) => row.every((cell) => cell !== 0));
    },
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext("2d");
    this.board = new Array(this.size)
      .fill(null)
      .map(() => new Array(this.size).fill(0));
    this.drawBoard();
    // 初始化得分矩阵
    // this.scores = new Array(this.size)
    //   .fill()
    //   .map((_) => new Array(this.size).fill(0));
    // for (let i = 0; i < this.size; i++) {
    //   for (let j = 0; j < this.size; j++) {
    //     this.scores[i][j] = this.evaluate(i, j, 1) - this.evaluate(i, j, -1);
    //   }
    // }
  },
  methods: {
    drawBoard() {
      const size = 670;
      const gridWidth = (size-35) / (this.size - 1);
      this.ctx.lineWidth = 1;
      // 绘制棋盘背景
      this.ctx.fillStyle = "#DDBB8F";
      this.ctx.fillRect(0, 0, size, size);

      // 绘制横线和竖线
      this.ctx.strokeStyle = "#000";
      for (let i = 0; i < this.size; i++) {
        // console.log(gridWidth / 2 + i * gridWidth, gridWidth / 2,'绘制路径1');
        this.ctx.beginPath();
        this.ctx.moveTo(gridWidth / 2 + i * gridWidth, gridWidth / 2);
        this.ctx.lineTo(gridWidth / 2 + i * gridWidth, size - gridWidth / 2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(gridWidth / 2, gridWidth / 2 + i * gridWidth);
        this.ctx.lineTo(size - gridWidth / 2, gridWidth / 2 + i * gridWidth);
        this.ctx.stroke();
      }
    },
    drawPiece(x, y, player) {
      const size = 670;
      const gridWidth = (size-35) / (this.size - 1);
      const radius = (gridWidth - 6) / 2;

      this.ctx.beginPath();
      this.ctx.arc(
        gridWidth / 2 + x * gridWidth,
        gridWidth / 2 + y * gridWidth,
        radius,
        0,
        Math.PI * 2
      );
      this.ctx.closePath();
      const gradient = this.ctx.createRadialGradient(
        gridWidth / 2 + x * gridWidth,
        gridWidth / 2 + y * gridWidth,
        radius - 3,
        gridWidth / 2 + x * gridWidth,
        gridWidth / 2 + y * gridWidth,
        radius
      );
      if (player === 1) {
        gradient.addColorStop(0, "#000000");
        gradient.addColorStop(1, "#000000");
      } else {
        gradient.addColorStop(0, "#ffffff");
        gradient.addColorStop(1, "#ffffff");
      }
      this.ctx.fillStyle = gradient;
      this.ctx.fill();
    },
    reset() {
      // 重置棋盘
      this.player= 1
      this.gameOver= false
      this.board=null
      this.board = new Array(this.size)
      .fill(null)
      .map(() => new Array(this.size).fill(0));
      // 重绘棋盘
      this.drawBoard();
    },
    handleClick(e) {
      if (this.gameOver) {
        return;
      }
      const size = 670;
      const gridWidth = (size-35) / (this.size - 1);
      const canvasRect = this.$refs.canvas.getBoundingClientRect();
      const offsetX = e.clientX - canvasRect.left;
      const offsetY = e.clientY - canvasRect.top;

      const x = Math.floor(offsetX / gridWidth);
      const y = Math.floor(offsetY / gridWidth);

      // 计算棋子坐标
      if (this.board[y][x] === 0) {
        // 添加悔棋功能
        this.lastMoves.push([x, y, this.player]);
        if (this.lastMoves.length > 5) {
          this.lastMoves.shift();
        }

        this.board[y][x] = this.player;
        this.drawPiece(x, y, this.player);
        // console.log(this.isFull,'是否下满棋子');
        if(this.isFull){
          this.gameOver = true;
          this.$alert(`和棋！`, '游戏结束', {
            confirmButtonText: '再来一局',
            callback: () => {
              this.reset()
            }
          });
          return
        }
        // 判断胜负
        if (this.checkWin(x, y, this.player)) {
          this.gameOver = true;
          // 更新得分
          this.scores[this.player - 1] += 1;
          this.result = `Player ${this.player} wins! Scores: ${this.scores.join(
            ":"
          )}`;
          this.$alert(`恭喜${this.player==1?'黑棋':'白棋'}获胜！比分${this.scores.join(
            ":"
          )}`, '游戏结束', {
            confirmButtonText: '再来一局',
            callback: () => {
              this.reset()
            }
          });
          // console.log(this.result);
          return;
        }

        // 切换玩家
        this.player = 3 - this.player;

        if (this.player === 2) {
          // 如果当前是机器人下棋，则调用机器人下棋的函数
          const [x, y] = this.minimax1(19,this.player, -Infinity, Infinity);
          // console.log(x,y,'机器人落子坐标');
          this.board[y][x] = this.player;
          this.drawPiece(x, y, this.player);

          // 判断胜负
          if (this.checkWin(x, y, this.player)) {
            this.gameOver = true;
            this.$alert(`恭喜${this.player==1?'黑棋':'白棋'}获胜！比分${this.scores.join(
            ":"
          )}`, '游戏结束', {
            confirmButtonText: '再来一局',
            callback: () => {
              this.reset()
            }
          });
            // 更新得分
            this.scores[this.player - 1] += 1;
            this.result = `Player ${
              this.player
            } wins! Scores: ${this.scores.join("-")}`;

            return;
          }

          // 切换玩家
          this.player = 3 - this.player;
        }
      }
    },
    // 判断指定颜色是否获胜
    checkWin(x, y, color) {
      const visited = new Array(this.size)
        .fill()
        .map((_) => new Array(this.size).fill(false));
      const stack = [];

      // 判断指定位置上是否是指定颜色的棋子
      function isValid(x, y) {
        return (
          x >= 0 &&
          x < this.size &&
          y >= 0 &&
          y < this.size &&
          !visited[x][y] &&
          this.board[x][y] === color
        );
      }

      // 扩展当前位置到四周相邻的位置
      function expand(x, y) {
        visited[x][y] = true;
        if (isValid.call(this, x - 1, y)) stack.push([x - 1, y]);
        if (isValid.call(this, x + 1, y)) stack.push([x + 1, y]);
        if (isValid.call(this, x, y - 1)) stack.push([x, y - 1]);
        if (isValid.call(this, x, y + 1)) stack.push([x, y + 1]);
      }

      // 从左边缘向右边缘搜索
      for (let i = 0; i < this.size; i++) {
        if (this.board[i][0] === color && !visited[i][0]) {
          stack.push([i, 0]);
          while (stack.length > 0) expand.call(this, ...stack.pop());
        }
      }

      // 如果左边缘和右边缘有连通，则返回 true
      for (let i = 0; i < this.size; i++) {
        if (visited[i][this.size - 1]) return true;
      }

      visited.forEach((row) => row.fill(false));

      // 从上边缘向下边缘搜索
      for (let i = 0; i < this.size; i++) {
        if (this.board[0][i] === color && !visited[0][i]) {
          stack.push([0, i]);
          while (stack.length > 0) expand.call(this, ...stack.pop());
        }
      }

      // 如果上边缘和下边缘有连通，则返回 true
      for (let i = 0; i < this.size; i++) {
        if (visited[this.size - 1][i]) return true;
      }

      return false;
    },
    robotMove() {
      // 机器人下棋的算法，返回一个以 [x, y] 形式表示的坐标
    },
    minimax(depth, player) {
      const maxDepth = 10;

      if (depth >= maxDepth) {
        return [null, this.evaluate()];
      }

      let [bestScore, bestX, bestY] = [
        player === 1 ? -Infinity : Infinity,
        null,
        null,
      ];

      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          if (this.board[i][j] === 0) {
            this.board[i][j] = player;
            const score = this.minimax(depth + 1, 3 - player)[1];
            this.board[i][j] = 0;

            if (player === 1) {
              if (score > bestScore) {
                [bestScore, bestX, bestY] = [score, j, i];
              }
            } else {
              if (score < bestScore) {
                [bestScore, bestX, bestY] = [score, j, i];
              }
            }
          }
        }
      }

      return [bestX, bestY];
    },
    minimax1(depth, player, alpha, beta) {
      const maxDepth = 30;

      if (depth >= maxDepth) {
        return [null, this.evaluate()];
      }

      let [bestScore, bestX, bestY] = [
        player === 1 ? -Infinity : Infinity,
        null,
        null,
      ];

      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          if (this.board[i][j] === 0) {
            this.board[i][j] = player;
            const score = this.minimax(depth + 1, 3 - player, alpha, beta)[1];
            this.board[i][j] = 0;

            if (player === 1) {
              if (score > bestScore) {
                [bestScore, bestX, bestY] = [score, j, i];
              }
              alpha = Math.max(alpha, score);
              if (alpha >= beta) {
                return [bestX, bestY];
              }
            } else {
              if (score < bestScore) {
                [bestScore, bestX, bestY] = [score, j, i];
              }
              beta = Math.min(beta, score);
              if (beta <= alpha) {
                return [bestX, bestY];
              }
            }
          }
        }
      }

      return [bestX, bestY];
    },
    evaluate() {
      const lines = this.getLines();
      let [score1, score2] = [0, 0];

      for (const line of lines) {
        const count1 = line.filter((x) => x === 1).length;
        const count2 = line.filter((x) => x === 2).length;

        if (count1 === 0 && count2 > 0) {
          score2 += this.getScore(count2);
        } else if (count2 === 0 && count1 > 0) {
          score1 += this.getScore(count1);
        }
      }

      return score1 - score2;
    },

    getScore(count) {
      const scores = [0, 1, 10, 50, 500, 5000];
      return scores[count];
    },

    getLines() {
      const lines = [];

      // 获取所有行
      for (let i = 0; i < this.size; i++) {
        lines.push(this.board[i]);
      }

      // 获取所有列
      for (let i = 0; i < this.size; i++) {
        const column = [];
        for (let j = 0; j < this.size; j++) {
          column.push(this.board[j][i]);
        }
        lines.push(column);
      }

      // 获取主对角线
      const diagonal1 = [];
      for (let i = 0; i < this.size; i++) {
        diagonal1.push(this.board[i][i]);
      }
      lines.push(diagonal1);

      // 获取副对角线
      const diagonal2 = [];
      for (let i = 0; i < this.size; i++) {
        diagonal2.push(this.board[this.size - 1 - i][i]);
      }
      lines.push(diagonal2);

      return lines;
    },
  },
};
</script>
<style scoped>
.game{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding-top: 15px;
}
</style>
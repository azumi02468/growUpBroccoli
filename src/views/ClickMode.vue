<template>
  <div class="clickMode">
    <h1>クリックモード</h1>
    <div>10秒間で出来るだけ多くクリックして、ブロッコリーを成長させましょう。</div>
    <button @click="startGame">ゲームスタート</button>
    <div v-if="gameFlg">
      <div id="time">残り時間：{{countDown}}秒</div>      
      <div id="playground" @click="growUp">
        <div>この枠内をクリックしてください。</div>
        <img v-bind:style="{width:getBroccoliStyle, height:getBroccoliStyle}" id="broccoli" src="broccoli.png" alt="画像が見つかりません">
      </div>
    </div>
    <div v-if="finishFlg">
      <div>ゲーム終了！</div>
      <div>クリックした回数：{{broccoli}}</div>
      <div>評価コメント:{{evaluation}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'clickMode',
  data(){
    return {
      gameFlg: false,
      finishFlg: false,
      broccoli: 0,
      timer: null,
      countDown: 10,
      evaluation: ''
    }
  },
  computed: {
    getBroccoliStyle: function(){
      return (this.broccoli * 10) + 'px';
    }
  },
  methods: {
    startGame: function(){
      this.gameFlg = true;

      let self = this;
      this.timer = setInterval(function(){
        self.countDown--;
        if (self.countDown === 0){
          clearInterval(self.timer);
          self.finishFlg = true;
          // 評価する
          self.evaluation = evaluate(self.broccoli);
        }
      }, 1000)
    },
    growUp: function(){
      if (!this.finishFlg){
        this.broccoli++;
      }
    }
  }
}

// 評価コメントを判定
let evaluate = function(score){
  let comment = '';
  const commentBy = ' by Broccoli';

  if (score <= 10) {
    comment = '遅すぎ、もっと頑張れ';
  } else if (score <= 20) {
    comment = 'やる気あんの？';
  } else if (score <= 30) {
    comment = 'しっかりせなあかん';
  } else if (score <= 40) {
    comment = 'まだまだだね';
  } else if (score <= 50) {
    comment = '少しはやるようだな';
  } else if (score <= 60) {
    comment = 'な、なんだと';
  } else {
    comment = 'あなたには敵いません';
  }
  return comment + commentBy;
}

</script>

<style scoped>
  img#broccoli {
    user-select: none;
    width: 10px;
    height: 10px;
    max-width: 100%;
    max-height: 100%;
  }

  #playground {
    width: 100vw;
    height: 100vh;
    border:medium solid black;
    margin-top: 10px;
  }
</style>

<template>
  <div class="flickMode">
    <h1>フリックモード</h1>
    <div>10秒間で出来るだけ多くドラッグまたはスワイプして、ブロッコリーを成長させましょう。</div>
    <button @click="startGame">ゲームスタート</button>
    <div v-if="gameFlg">
      <div id="time">残り時間：{{countDown}}秒</div>      
      <div id="playground" @mousemove="drag($event)" @drag="drag($event)" @mouseup="stopDrag()" @mouseleave="stopDrag()" >
        <img id="broccoli" src="broccoli.png" alt="画像が見つかりません" v-bind:style="{left:broPosition.x+'px', top:broPosition.y+'px'}" @mousedown="startDrag($event)" />
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
      gameFlg: true,
      finishFlg: false,
      broccoli: 0,
      timer: null,
      countDown: 10,
      evaluation: '',
      isDrag: false,
      prePosition: {
        x: 0,
        y: 0
      },
      broPosition: {
        x: 0,
        y: 0
      }
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
    startDrag: function(e){
      this.isDrag = true;
      this.prePosition.x = e.offsetX;
      this.prePosition.y = e.offsetY;
      console.log("ドラッグ開始 横:"+this.prePosition.x+" 縦:"+this.prePosition.y+"event:"+e.type);
    },
    drag: function(e){
      //console.log(e.offsetX+","+e.offsetY);
      // 押下中
      if(this.isDrag){
        console.log(e.type);
        //console.log("offsetX:"+e.offsetX+",offsetY:"+e.offsetY);
        // // 前回座標との差分を画像に適用
        this.broPosition.x += e.offsetX - this.prePosition.x;
        this.broPosition.y += e.offsetY - this.prePosition.y;
        console.log("ブロッコリー座標横："+this.broPosition.x+",縦："+this.broPosition.y);

        // // 前回のクリック座標を更新
        this.prePosition.x = e.offsetX;
        this.prePosition.y = e.offsetY;
      }
    },
    stopDrag: function() {
      this.isDrag = false;
      console.log("ドラッグ終了"+this.broPosition.x);
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
    width: 100px;
    height: 100px;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
  }

  #playground {
    width: 100vw;
    height: 100vh;
    border:medium solid black;
    margin-top: 10px;
  }
</style>

<template>
  <div class="FuriFuri">
    <h1>フリフリモード</h1>
    <div>10秒間で出来るだけ多く端末をフリフリして、ブロッコリーを成長させましょう。</div>
    <button @click="startGame">ゲームスタート</button>
    <div v-if="gameFlg">
      <div id="time">残り時間：{{countDown}}秒</div>      
      <div id="playground">
        <img id="broccoli" src="broccoli.png" alt="画像が見つかりません" />
      </div>
    </div>
    <div v-if="finishFlg">
      <div>ゲーム終了！</div>
      <div>フリフリした回数：{{broccoli}}</div>
      <div>評価コメント:{{evaluation}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'furifuriMode',
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
      if (!this.isDeviceMotion()){
        return;
      }
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
    isDeviceMotion: function(){
      let self = this;
      if (DeviceMotionEvent &&
        typeof DeviceMotionEvent.requestPermission === 'function'
      ) {
        // iOS 13+ の Safari
        // 許可を取得
        DeviceMotionEvent.requestPermission()
        .then(function(permissionState){
          if (permissionState === 'granted') {
            // 許可を得られた場合、devicemotionをイベントリスナーに追加
            window.addEventListener('devicemotion', function(e){
              return self.deviceMove(e);
            });
          } else {
            // 許可を得られなかった場合の処理
            return false;
          }
        })
        .catch(console.error) // https通信でない場合などで許可を取得できなかった場合
      } else {
        // 上記以外のブラウザ
        console.log('許可されていません。');
        return false;
      }
      return true;
    },
    deviceMove: function(e){
      if (this.gameFlg) {
        console.log(e.type);
        var x = e.accelerationIncludingGravity.x; // X方向の加速度
        var y = e.accelerationIncludingGravity.y; // Y方向の加速度
        var z = e.accelerationIncludingGravity.z; // Z方向の加速度

        // 加速度が一定以上のとき
        if (Math.abs(x) > 15 || Math.abs(y) > 15 || Math.abs(z) > 15) {
          this.broccoli++;
        }
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
    width: 500px;
    height: 500px;
    max-width: 100%;
    max-height: 100%;
    animation: furifuri 500ms linear infinite;
  }

  @keyframes furifuri {
    0% { transform:translateX(0) }
    25% { transform:translateX(15px) }
    50% { transform:translateX(0) }
    75% { transform:translateX(-15px) }
    100% { transform:translateX(0) }
  }

  #playground {
    width: 100vw;
    height: 100vh;
    /* border:medium solid black; */
    margin-top: 10px;
  }
</style>

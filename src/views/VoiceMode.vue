<template>
  <div class="voiceMode">
    <h1>ヴォイスモード</h1>
    <div>罵声を浴びせて、ブロッコリーを成長させましょう。<br />
    ただし、何が罵声かどうかは開発者に委ねられています。</div>
    <button @click="startGame">ゲームスタート</button>
    <div v-if="gameFlg">
      <textarea v-model="text" />
      <div>{{ recognitionText }}</div>
      <button v-if="isTextReady" @click="attack">口撃！</button>
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
      evaluation: '',
      text: '',
      // eslint-disable-next-line
      recognition : new webkitSpeechRecognition(),
      recognitionText: '音声入力開始'
    }
  },
  computed: {
    getBroccoliStyle: function(){
      return (this.broccoli * 10) + 'px';
    },
    isTextReady: function(){
      return this.text.length > 0
    }
  },
  methods: {
    startGame: function(){
      this.gameFlg = true;
      this.recognition.start();
    },
    attack: function(){
      if(boos.includes(this.text)){
        alert("「"+this.text+"」だと、、、なんて悪口だ");
      } else {
        alert("「"+this.text+"」、そんな言葉効かないぜ");
      }
    }
  },
  created: function() {
    this.recognition.onstart = () => {
      this.recognitionText = '音声入力中...'
    }
    this.recognition.onend = () => {
      this.recognitionText = '音声入力終了'
    }
    this.recognition.onresult = (event) => {
      if (event.results.length > 0) {
        this.text = event.results[0][0].transcript;
      }
    }
  }
}

const boos = [
  'あずみ','あづみ','安積',
];
</script>

<style scoped>
  img#broccoli {
    user-select: none;
    width: 500px;
    height: 500px;
    max-width: 100%;
    max-height: 100%;
  }

  #playground {
    width: 100vw;
    height: 100vh;
    margin-top: 10px;
  }
</style>

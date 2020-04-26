<template>
  <div class="menu">
    <h1>{{ msg }}</h1>
    <div id="announce">
      このサイトはあらゆる方法を使ってブロッコリーを育てるゲームです。
      <dl>
        <dt><a href="/clickMode">クリックモード</a></dt>
        <dd>クリック回数によってブロッコリーが成長します。</dd>
        <dt><a href="/flickMode">フリックモード</a></dt>
        <dd>フリック回数によってブロッコリーが成長します。</dd>
        <dt><a href="/furifuriMode">フリフリモード</a></dt>
        <dd>
          端末をフリフリした回数によってブロッコリーが成長します。<br />
          こちらはスマホ版のみの対応となります。(PCをフリフリしてもできません)
        </dd>
        <dt><a href="/voiceMode">ヴォイスモード</a></dt>
        <dd>罵声を浴びせることでブロッコリーが成長します。</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BroccoliGame',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
dt {
  font-weight: bold;
}
dd {
  margin-bottom: 10px;
}
</style>

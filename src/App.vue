<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">ホーム</router-link> |
      <router-link to="/clickMode">クリックモード</router-link> |
      <router-link to="/flickMode">フリックモード</router-link> |
      <router-link to="/furifuriMode">フリフリモード</router-link> |
      <router-link to="/voiceMode">ヴォイスモード</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

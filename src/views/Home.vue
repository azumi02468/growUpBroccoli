<template>
  <div class="home">
    <BroccoliGame msg="育てろ！ブロッコリー"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BroccoliGame from '@/components/BroccoliGame.vue'

export default {
  name: 'Home',
  components: {
    BroccoliGame
  }
}
</script>

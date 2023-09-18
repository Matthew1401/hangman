<script setup>
    import {RouterLink} from "vue-router"
    import PasswordContainer from '../components/PasswordContainer.vue';
    import HeartsContainer from '../components/HeartsContainer.vue'
    import Footer from '../components/Footer.vue'
    import MissedLetters from '../components/MissedLetters.vue';
</script>

<template>
  <div class="app-container">
    <div class="title">
      <h1>Wisielec</h1>
    </div>
    
    <PasswordContainer :password="data.password" :correct-letters="data.correctLetters"/>

    <div class="bottom-container">
      <HeartsContainer :number-of-lifes="data.lifes"/>
      <MissedLetters :missed-letters="data.missedLetters"/>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
  .app-container {
    width: 100vw;
    height: 100vh;
  }

  .title {
    width: 100%;
    text-align: center;
    color: rgb(224, 128, 2);
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 80px;
  }

  .bottom-container {
    width: 100%;
  }
</style>

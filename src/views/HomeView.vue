<script setup>
    import {RouterLink} from "vue-router"
    import PasswordContainer from '../components/PasswordContainer.vue';
    import HeartsContainer from '../components/HeartsContainer.vue'
    import Footer from '../components/Footer.vue'
    import MissedLetters from '../components/MissedLetters.vue';
    import { onMounted, reactive } from 'vue'
    
    const data = reactive({
    lifes: 4,
    correctLetters: [],
    missedLetters: [],
    password: 'gorąco jesienią lol'
  })
  data.password = data.password.toUpperCase()


  const substractLife = () => {
    data.lifes--
    if (data.lifes === 0) {
      if (confirm('U lose') === true) {
        window.location.reload();
      } else {
        window.location.reload();
      }
    }
  }


  const checkWinCondition = () => {
    const passwordWithoutDups = Array.from(new Set(data.password.split('')));
    if (passwordWithoutDups.includes(' ')) {
      passwordWithoutDups.splice(passwordWithoutDups.indexOf(' '), 1)
    }
    if (passwordWithoutDups.length === data.correctLetters.length) {
      if (confirm('U WON, congrats!') === true) {
        window.location.reload();
      } else {
        window.location.reload();
      }
    }
  };


  const checkIfTheLetterIsCorrect = (letter) => {
    if (data.password.includes(letter)) {
      if (!data.correctLetters.includes(letter)) {
        data.correctLetters.push(letter)
        checkWinCondition()
      }
      return
    }
    else {
      if (!data.missedLetters.includes(letter)) {
        data.missedLetters.push(letter)
        substractLife()
      }
      return
    }
  }


  onMounted(() => {
    window.addEventListener('keypress', (e) => {
      const supposedLetter = String.fromCharCode(e.keyCode);
      if (supposedLetter.toUpperCase() !== supposedLetter.toLowerCase() || supposedLetter.codePointAt(0) > 127) {
        checkIfTheLetterIsCorrect(supposedLetter.toUpperCase())
      }
    });
  });

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

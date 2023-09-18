<script setup>
    import LetterContainer from './LetterContainer.vue';
    import { defineProps } from 'vue';

    const {password, correctLetters} = defineProps(['password', 'correct-letters'])
</script>

<template>
    <div class="password-container">
      <LetterContainer 
        v-for="letter in password"
        :key="letter"
        :letter="letter"
        :correct-guess="(password.includes(letter)) && (correctLetters.includes(letter))"
        :is-space="(letter === ' ')"
      />
    </div>
</template>

<style scoped>
  .password-container {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 25vh;
  }
</style>
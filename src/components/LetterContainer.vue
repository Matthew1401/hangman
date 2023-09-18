<script setup>
    import { defineProps } from 'vue';

    const {letter, correctGuess, isSpace} = defineProps(['letter', 'correct-guess', 'is-space'])
</script>

<template>
    <div class="letter-container" :class="[ ! isSpace ? 'border': '' ]">
        <h1 v-if="correctGuess">{{ letter }}</h1>
      </div>
</template>

<style scoped>
  .letter-container {
    padding: 5px;
    margin: 5px;
    font-size: 20px;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .border {
    border-bottom: 2px solid white;
  }
</style>
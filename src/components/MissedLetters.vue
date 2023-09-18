<script setup>
    import { defineProps } from 'vue'

    const { missedLetters } = defineProps(['missed-letters'])
</script>

<template>
    <div class="missed-letters">
        <span>Nietrafione litery: </span>
        <span
          v-for="letter in missedLetters"
          :key="'l' + letter"
          class="miss"
        >
          {{ letter }}
        </span>
      </div>
</template>

<style scoped>
    .missed-letters {
        padding-left: 25px;
        font-size: 25px;
    }

    .miss {
        margin-right: 5px;
    }
</style>

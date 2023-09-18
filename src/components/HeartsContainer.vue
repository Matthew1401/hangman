<script setup>
    import Heart from './Heart.vue';
    import { defineProps } from 'vue';

    const {numberOfLifes} = defineProps(['number-of-lifes'])
</script>

<template>
    <div class="hearts-container">
        <Heart 
            v-for="life in numberOfLifes"
            :key="'life_' + life"/>
      </div>
</template>

<style scoped>
     .hearts-container {
        display: flex;
        justify-content: left;
        padding-left: 30px;
        margin-bottom: 20px;
        min-height: 50px;
    }
</style>

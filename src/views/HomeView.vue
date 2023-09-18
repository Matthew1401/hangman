<script setup>
    import Footer from '../components/Footer.vue'
    import {RouterLink} from "vue-router"

</script>

<template>
  <div class="app-container">
    <div class="welcome-page">
        <h1>Witaj na stronie głównej gry</h1>
    </div>

    <div class="play">
        <RouterLink :to="`gameOn`">Rozpocznij grę</RouterLink>
    </div>
    
    <Footer />
  </div>
</template>

<style scoped>
    .welcome-page {
        width: 100%;
        text-align: center;
        font-size: 40px;
        padding-top: 15px;
        margin-bottom: 100px;
        border-bottom: 2px solid gray;
    }

    .play {
        width: 100%;
        text-align: center;
        font-size: 50px;
    }

    .play a {
        text-decoration: none;
        width: 100px;
        padding: 15px;
        border: 2px solid gray;
        border-radius: 20px;
        color: white;
        background-color: rgba(78, 73, 73, 0.637);
    }

    .play a:hover {
        background-color: rgba(112, 108, 108, 0.637);
    }

</style>

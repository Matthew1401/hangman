<script setup>
    import Footer from '../components/Footer.vue'
    import {useRouter, useRoute} from "vue-router"
    import { ref } from 'vue'

    const route = useRoute()
    const isWin = route.params.isWin
    const text = ref('')

    if (isWin == 'win') {
        text.value = 'Wygrałeś! Gratulacje'
    }
    else {
        text.value = 'Przegrałeś xd'
    }

    const router = useRouter()
    const navigateToGameOn = () => {
        router.push(`/gameOn`)
    }

</script>

<template>
  <div class="app-container">
    <div class="welcome-page">
        <h1> {{ text }}</h1>
    </div>

    <div class="play">
        <button @click="navigateToGameOn()">Zagraj ponownie</button>
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

    .play button {
        text-decoration: none;
        width: 350px;
        padding: 15px;
        border: 2px solid gray;
        border-radius: 20px;
        color: white;
        background-color: rgba(78, 73, 73, 0.637);
        font-size: 50px;
        cursor: pointer;
    }

    .play button:hover {
        background-color: rgba(112, 108, 108, 0.637);
    }

</style>

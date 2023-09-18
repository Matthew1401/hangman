import {createRouter, createWebHistory} from "vue-router"
import HomeView from '../views/HomeView.vue'
import GameOnView from '../views/GameOnView.vue'
import PlayAgainView from '../views/PlayAgainView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path:"/gameOn",
            name: "gameOn",
            component: GameOnView
        },
         {
            path:"/gameOn/playAgain/:isWin",
            name: "playAgain",
            component: PlayAgainView
        },
    ]
})

export default router
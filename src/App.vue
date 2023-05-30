<template>
    <div id="app">
        <h1><p>Welcome to the Atlas Game!</p></h1>
        <gameMode></gameMode>

        <infoLocal></infoLocal>
    </div>
    <br>
    <div>
        <atlasLocal v-if = "equalNames"></atlasLocal>
        <h3>{{equalNames}}</h3>
    </div>
</template>

<script>
import gameMode from './components/gameMode.vue'
import infoLocal from './components/infoLocal.vue'
import atlasLocal from './components/atlasLocal.vue'

export default{

    name: 'App',
    components: {
        gameMode,
        infoLocal,
        atlasLocal
    },

    beforeMount() {
        
        localStorage.setItem('playerNum',2),
        localStorage.setItem('userNames',[]),
        localStorage.setItem('equalNames',false)
    },

    data(){
        return {
            greeting: 'Hello, Vue!',
            playerNum: localStorage.getItem('playerNum'),
            userNames: localStorage.getItem('userNames'),
            equalNames: localStorage.getItem('equalNames')
        }
    }
}
</script>
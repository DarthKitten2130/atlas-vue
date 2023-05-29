<template>
    <div id="app">
        <h1><p>Welcome to the Atlas Game!</p></h1>
        <gameMode></gameMode>
    </div>
    <div>
        <infoLocal></infoLocal>
    </div>
    <br>
    <div>
        <atlasLocal v-if = "store.equal"></atlasLocal>
    </div>
</template>

<script>
import gameMode from './components/gameMode.vue'
import infoLocal from './components/infoLocal.vue'
import atlasLocal from './components/atlasLocal.vue'
import {store} from './components/store.js'

export default{

    name: 'App',
    components: {
        gameMode,
        infoLocal,
        atlasLocal
    },

    data(){
        return {
            greeting: 'Hello, Vue!',
            store
        }
    },
}

</script>
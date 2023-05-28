<template>
    <div id="app">
        <h1><p>Welcome to the Atlas Game!</p></h1>
        <gameMode></gameMode>
    </div>
    <div>
        <infoLocal></infoLocal>
    </div>
</template>

<script>
import gameMode from './components/gameMode.vue'
import infoLocal from './components/infoLocal.vue'
import {store} from './components/store.js'

export default{

    name: 'App',
    components: {
        gameMode,
        infoLocal,
    },

    data(){
        return {
            greeting: 'Hello, Vue!',
            store
        }
    },
}

</script>
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

export default{

    name: 'App',
    components: {
        gameMode,
        infoLocal,
    },

    data: function(){
        return {
            greeting: 'Hello, Vue!',
        }
    },
}

</script>
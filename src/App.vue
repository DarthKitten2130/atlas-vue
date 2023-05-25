<template>
    <div id="app">
        <h1><p>Welcome to the Atlas Game!</p></h1>
        <gameMode></gameMode>
    </div>
    <div>
        
    </div>
</template>

<script>
import gameMode from './components/gameMode.vue'

export default{

    name: 'App',
    components: {
        gameMode
    },

    data: function(){
        return {
            greeting: 'Hello, Vue!',
        }
    },
}

</script>
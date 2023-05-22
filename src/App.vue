<template>
    <div id="app">
        <h1><p>Welcome to the Atlas Game!</p></h1>
        <gameMode></gameMode>
        <p>{{ flaskGreeting }}</p>
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
            flaskGreeting: ''
        }
    },
    created: async function(){
        const gResponse = await fetch("http://localhost:5000/greeting");
        const gObject = await gResponse.json();
        this.flaskGreeting = gObject.greeting;
    }
}

</script>
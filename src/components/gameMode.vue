<template>
    <div id = 'div1'> 
        <h2>Game Mode</h2>
        <h3><form action = "http://localhost:5000/gm" id = "game_mode" name = "game_mode" method = "post">
            <input type="radio" id="local" name= "mode" value="local" v-model="gm">
            <label for="local">Local</label><br>
            <input type="radio" id="online" name="mode" value="online" v-model="gm">
            <label for="online">Online</label><br>
            </form></h3>
            <h3>{{ gm }}</h3>
        </div> 
</template>

<script>
    export default {
        name: 'gameMode',
        data(){
            return{
                gm : 'local'
            }
        }
    }
</script>
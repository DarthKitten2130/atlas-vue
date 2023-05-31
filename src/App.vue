<template>
    <div id="app">
        <h1><p>Welcome to the Atlas Game!</p></h1>
    </div>
    
    <div id = 'gameMode'> 
        <h2>Game Mode</h2>
        <h3><form id = "game_mode" name = "game_mode" method = "post">
                <input type="radio" id="local" name= "mode" value="local" v-model="gm">
                <label for="local">Local</label><br>
                <input type="radio" id="online" name="mode" value="online" v-model="gm">
                <label for="online">Online</label><br>
            </form></h3>
            <h3>{{ gm }}</h3>
    </div> 

    <div id="info">
        <form>
            <label for="playerNum">How Many Players?</label><br>
            <input id="playerNum" name="playerNum" v-model="playerNum"><br>
            <br>
            <label for="userName">Usernames (Seperate multiple usernames with commas)</label><br>
            <input id="userName" name="playerNum" v-model="userNames">
        </form>
        <h4 style="color:red" v-if="numOne">You can't have just 1 player!</h4>
        <h4 style="color:red" v-else-if="unequalUserNames">Number of players and number of usernames isn't the same!</h4>


        <h3>{{ userNames.split(',') }} <br>
            {{ playerNum }} <br>
            {{ equalUserNames }}
        </h3>

    </div>
        <atlasLocal v-if = "equalUserNames"></atlasLocal>
    <br>
    <div>
        
    </div>
</template>

<script>
import atlasLocal from './components/atlasLocal.vue'

export default{

    name: 'App',
    components: {
        atlasLocal
    },

    data(){
        return {
            gm: 'local',
            playerNum: 2,
            userNames: '',
        }
    },
    computed: {

        equalUserNames() {

            return this.playerNum == this.userNames.split(',').length ? true : false
        },

        unequalUserNames() {
            return this.playerNum == this.userNames.split(',').length ? false : true
        },

        numOne() {
            return this.playerNum == 1 ? true : false
        }
    },
    methods: {
        
    }
}
</script>
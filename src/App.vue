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
            <input id="playerNum" name="playerNum" v-model="tempPlayerNum"><br>
            <br>
            <label for="userName">Usernames (Seperate multiple usernames with commas)</label><br>
            <input id="userName" name="playerNum" v-model="tempUserNames">
            <br>
            <br>
            <button v-on:click="playerCount">Play!</button>
        </form>
        <h3>{{ tempUserNames.split(',') }} <br>
            {{ tempPlayerNum }} <br>
            {{ equalUserNames }}
        </h3>

    </div>
        <h3>{{equalNames}}</h3>
        <atlasLocal v-if = "equalNames"></atlasLocal>
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

    beforeMount() {
        
        localStorage.setItem('playerNum',2),
        localStorage.setItem('userNames',''),
        localStorage.setItem('equalNames','false'),
        console.log(localStorage.getItem('equalNames'))

    },

    data(){
        return {
            gm: 'local',
            playerNum: parseInt(localStorage.getItem('playerNum')) || 2,
            userNames: localStorage.getItem('userNames') || '',
            equalNames: localStorage.getItem('equalNames') === true,
            tempPlayerNum: 2,
            tempUserNames: '',
        }
    },
    computed: {

        equalUserNames() {

            return this.tempPlayerNum == this.tempUserNames.split(',').length ? true : false
        }

    },
    methods: {
        playerCount() {
            localStorage.setItem('playerNum', this.tempPlayerNum.toString());
            localStorage.setItem('userNames', this.tempUserNames);

            if (this.tempPlayerNum == 1) {
                alert("You can't have just one player!");
            } 
            
            else if (this.equalUserNames == false) {
                alert("Number of Players and Usernames isn't the same!");
            } 
            
            else {
                localStorage.setItem('equalNames', this.equalUserNames);
            }

            console.log(this.equalUserNames)
        }
    }
}
</script>
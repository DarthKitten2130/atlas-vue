<template>
    <body>
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
            <input id="playerNum" name="playerNum" v-model="playerNum" :disabled="gameStarted"><br>
            <br>
            <label for="userName">Usernames (Seperate multiple usernames with commas)</label><br>
            <input id="userName" name="playerNum" v-model="userNames" :disabled="gameStarted">
        </form>
        <br>
        <button v-on:click="this.gameStarted = true" v-show="equalUserNames">Play!</button>
        <h4 style="color:red" v-if="numOne">You can't have just 1 player!</h4>
        <h4 style="color:red" v-else-if="!equalUserNames">Number of players and number of usernames isn't the same!</h4>

    </div>
<br>
<br>
    <div id="game" v-if="equalUserNames" >
        <span style="text-align:center">
        <h1>{{ countryName.slice(-1).toUpperCase() }}</h1>
        <form>
            <input v-model="countryName" autocomplete="off" placeholder="Country" :disabled="!gameStarted"><br><br>
        </form>
        <br>
        <button v-on:click="gameFunc()">Enter</button>
        </span>
        <br>
        <span style="color:red">
        <h4 v-if="inputNull">Type something dumbass!</h4>
        <h4 v-else-if="countryPlayed">You already played this country!</h4>
        <h4 v-else-if="charWrong">The country doesn't start with the letter of the last country!</h4>
        <h4 v-else-if="countryNull">The country doesn't exist!</h4>
        </span>
        <span style="color:darkgreen">
        <h4 v-if="gameQuit">{{ this.userNames.split(',')[this.turn] }} lost!</h4>
        </span>


        <table style="width: 100%">
            <thead>
                <tr>
                    <th v-for="name in userNames.split(',')" :key="name">{{ name }}</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td v-for="name in userNames.split(',')" :key="name">
                    <ul>
                        <li v-for="country in userAtlas[name]" :key="country">{{ country.replaceAll("_"," ") }}</li>
                    </ul>
                    </td>
                </tr>
            </tfoot>
        </table>


    </div>
    </body>
</template>

<script>
import countries from './assets/countries.txt'
export default{

    name: 'App',
    components: {
    },

    data(){
        return {
            gm: 'local',
            playerNum: 2,
            userNames: '',
            gameStarted: false,
            userAtlas: {},
            turn: 0,
            playerTurn: '',
            countryName: '',
            oldCountry: '',
            newCountry: '',
            countryText: countries.toString().split('\r\n'),
            countryArray: [],
            buttonFirstTime: true,
            gameQuit: false,

            // Error Messages
            charWrong: false,
            countryNull: false,
            countryPlayed: false,
            inputNull: false,
        }
    },

    watch: {
        userNames: function() {
            const usernames = this.userNames.split(',')
            this.userAtlas = {}
            for (let i = 0; i < usernames.length; i++) {
            
                this.userAtlas[usernames[i]] = [];
            }
        },
    },

    computed: {

        equalUserNames() {

            return this.playerNum == this.userNames.split(',').length ? true : false
        },

        numOne() {
            return this.playerNum == 1 ? true : false
        },

        charCheck() {
            return this.oldCountry.slice(-1) === this.newCountry.charAt(0);
        }
    },

    methods: {
        gameFunc() {

            this.inputNull = false
            this.countryPlayed = false 
            this.countryNull = false
            this.charWrong = false


            // Turn Checker - works
            if (this.turn == this.userNames.split(',').length) {
                this.turn = 0
            }

            if (this.countryName.toLowerCase() == 'quit'){
                this.gameQuit = true
            }
            // Played Country Checker - works
            else if (this.countryArray.includes(this.countryName.replaceAll(" ","_").toLowerCase()) == true){
                this.countryPlayed = true
            }

            // Empty Input Checker - works
            else if (this.countryName == ''){
                this.inputNull = true
            }

            // Country Exists Checker - works
            else if (this.countryText.includes(this.countryName.replaceAll(" ","_").toLowerCase()) == false) {
                this.countryNull = true
            }


            // Letter Checker- works
            else if (this.charCheck == false && this.buttonFirstTime == false){
                this.charWrong = true
            }


            // Main Function - works
            else if (this.countryText.includes(this.countryName.replaceAll(" ","_").toLowerCase()) == true){
                console.log('hello')
                
                if (this.charCheck == true || this.buttonFirstTime == true) {
                    
                    this.buttonFirstTime = false

                    // Object Array Pusher
                    this.userAtlas[this.userNames.split(',')[this.turn]].push(this.countryName.replaceAll(" ","_").toLowerCase());
                    
                    this.turn++;
                    
                    this.countryArray.push(this.countryName.replaceAll(" ","_").toLowerCase());

                    this.oldCountry = this.countryName.replaceAll(" ","_").toLowerCase()
                    
                }
            }
        }
    }
}
</script>

<style>
@font-face {
  font-family: 'Kablammo';
  src: url('./assets/fonts/Kablammo-Regular-VariableFont_MORF.ttf') format('truetype');
}
body {font-family:'Comic Sans MS';
       background-color: skyblue;}
h1 {color: white; font-family: 'Kablammo'; text-align: center;}
</style>
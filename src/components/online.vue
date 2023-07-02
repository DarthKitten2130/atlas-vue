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
        <br>
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

<br>

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
            gm: 'online',
            playerNum: 2,
            userNames: ''.split(','),
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

</script>
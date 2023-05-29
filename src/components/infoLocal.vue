<template>
    <div>
        <form>
            <label for="playerNum">How Many Players?</label><br>
            <input id="playerNum" name = "playerNum" v-model="store.playerNum"><br>
            <br>
            <label for="userName">Usernames (Seperate multiple usernames with commas)</label><br>
            <input id="userName" name="playerNum" v-model="store.userNames">
            <br>
            <br>
            <button v-on:click="playerCount">Play!</button>
        </form>
        <h3>{{ store.playerNum }}<br>
            {{ store.userNames.split(',') }}
        </h3>
    </div>
</template>

<script>
import {store} from './store.js'

    export default{
        name:'infoLocal',
        data(){
            return{
            store,
            }
        },
        methods:{
            playerCount() {
                if (store.playerNum != store.userNames.split(',').length) {
                    alert("Number of Players and Usernames isn't the same!")
                }
                
                else if (store.playerNum == 1) {
                    alert("You can't have just one player!")
                }

                else {
                    store.equal = true
                }
            }
        }
    }
</script>
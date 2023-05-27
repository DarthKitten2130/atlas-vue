<template>
    <div>
        <form>
            <label for="playerNum">How Many Players?</label><br>
            <input id="playerNum" name = "playerNum" v-model="playerNum"><br>
            <br>
            <label for="userName">Username(s) (Seperate multiple usernames with commas)</label><br>
            <input id="userName" name="playerNum" v-model="userName">
            <br>
            <br>
            <button v-on:click="playerCount">Play!</button>
        </form>
        <h3>{{ playerNum }}<br>
            {{ userName.split(',') }}</h3>
    </div>
</template>

<script>
    export default{
        name:'infoLocal',
        data(){
            return{
            playerNum: 0,
            userName : '',
            }
        },
        methods:{
            playerCount() {
                if (this.playerNum != this.userName.split(',').length) {
                alert("Number of Players and Usernames isn't the same!")
                }
            }
        }
    }
</script>
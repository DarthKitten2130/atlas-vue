<template>
    <div>
        <form>
            <label for="playerNum">How Many Players?</label><br>
            <input id="playerNum" name = "playerNum" v-model="tempPlayerNum"><br>
            <br>
            <label for="userName">Usernames (Seperate multiple usernames with commas)</label><br>
            <input id="userName" name="playerNum" v-model="tempUserNames">
            <br>
            <br>
            <button v-on:click="playerCount">Play!</button>
        </form>
        <h3>{{ userNames.split(',') }} <br>
            {{ playerNum }} <br>
            {{ equalNames }}
        </h3>
    </div>
</template>

<script>
    export default{
        name:'infoLocal',
        data(){
            return {
            tempPlayerNum: 2,
            tempUserNames: '',
            playerNum: localStorage.getItem('playerNum'),
            userNames: localStorage.getItem('userNames'),
            equalNames: localStorage.getItem('equalNames')  
            }
        },
        methods: {
            playerCount() {
                localStorage.setItem('playerNum',this.tempPlayerNum)

                localStorage.setItem('userNames',this.tempUserNames)
                
                if (localStorage.getItem('playerNum') == 1) {
                    localStorage.setItem('equalNames',false)
                    alert("You can't have just one player!")
                }                

                else if (localStorage.getItem('playerNum') != localStorage.getItem('userNames').split(',').length) {
                    localStorage.setItem('equalNames',false)
                    alert("Number of Players and Usernames isn't the same!")
                }

                else {
                    localStorage.setItem('equalNames',true)
                }
            }
        }
    }
</script>
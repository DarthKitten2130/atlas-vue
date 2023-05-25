<template>
    <div>
        <form method="post">
            <label for="playerNum">How Many Players?</label><br>
            <input id="playerNum" name = "playerNum" v-mode="playerNum"><br>
            <label for="userName"></label>
        </form>
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
        }
    }
</script>
<template>
    <h1>atlasLocal</h1>
</template>

<script>
    export default{
        name: 'atlasLocal',

        data(){
            return {
                playerNum: localStorage.getItem('playerNum'),
                userNames: localStorage.getItem('userNames'),
                equalNames: localStorage.getItem('equalNames')

            }
        }
    }

</script>
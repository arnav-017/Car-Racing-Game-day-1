class Player {
    constructor(){}
     //read the playerCount from database
     getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    } 
    //update the gamestate in the database
    updateCount(count)
    {
        database.ref('/').update({
            playerCount: count
        })
    }
    //update the name in the database
    update(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
}
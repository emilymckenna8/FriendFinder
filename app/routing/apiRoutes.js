
var friendList = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendList);
  });

  app.post("/api/friends", function(req, res) {
    friendList.push(req.body);
    console.log(friendList);
    var friendScores = req.body.scores;
    var scoreArray = [];
    var match = 0;
    var friendNumber = 0;

    for (var i = 0; i < (friendList.length - 1); i++) {
        var scoresDifferences = 0;
        for (var a = 0; a< friendScores.length; a ++) {
            scoresDifferences += (Math.abs(parseInt(friendList[i].scores[a]) - parseInt(friendScores[a])));
        }

        scoreArray.push(scoresDifferences)
    }

    for (var i = 0; i < scoreArray.length; i++) {
        if(scoreArray[i] <= scoreArray[match]) {
            match = i;
        }
    }

    var bestFriend = friendList[match];
    res.json(bestFriend);
    console.log(bestFriend);
    

    ;
  });


};

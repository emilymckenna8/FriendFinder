// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendList = require("../data/tableData");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendList);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

    var friendScores = req.body.scores;
    var scoreArray = [];
    var match = 0;
    var friendNumber = 0;

    for (var i = 0; i < friendList.length; i++) {
        var scoresDifferences = 0;
        for (var a = 0; a< friendScores.length; a ++) {
            scoresDifference += (Math.abs(parseInt(friendList[a].scores[a] = parseInt(friendScores[a]))));
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

    friendList.push(req.body);
  });


};

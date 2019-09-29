// Load Data
var friendData = require("../data/friends");
var friendArray = require("../data/friends");

// Routing
module.exports = function(app) {
  // // API GET Request
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    // console.log(friendData);

    
    var bestFriend = {
      name: "",
      photo: "",
      diff: 100
    };

    for (var i = 0; i < friendArray.length; i++) {
      var totalDifference = 0;
      console.log("inside loop")
      for (var j = 0; j < friendArray[i].scores.length; j++) {
        var a = friendArray[i].scores[j];
        var b = req.body.scores[j];
        totalDifference += Math.abs(parseInt(a) - b);
      }
      if (totalDifference < bestFriend.diff) {
        bestFriend.name = friendArray[i].name;
        bestFriend.photo = friendArray[i].photo;
        bestFriend.diff = totalDifference;
        // friendData.push(req.body);
        
      }
    }
    console.log(bestFriend)
    res.json(bestFriend)
  });
};

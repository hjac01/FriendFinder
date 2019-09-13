// Load Data
var friendData= require("../data/friends");

// Routing
module.exports = function(app) {

// // API GET Request
app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

// // API POST Requests
// app.post("/api/friends", function(req, res) {  

//     if (friendData.length < 5) {
//         friendData.push(req.body);
//         res.json(true);
//       }
      
//     });

    app.post("/api/friends", function(req, res) {
    console.log(req.body);
    console.log(friendData);
      });
    };

    var myScores = [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
  ]
  var bestFriend = {
      name: "",
      photo: "",
      diff: 100
  }
  console.log(friendArray[0])
  for (var i = 0; i<friendArray.length; i++) {
      var totalDifference = 0
      for (var j = 0; j<friendArray[i].scores.length; j++) {
          var a = friendArray[i].scores[j]
          var b = myScores[j]
          totalDifference += Math.abs(parseInt(a) - b)
      }
      if(bestFriend.diff > totalDifference){
          bestFriend.name = friendArray[i].name
          bestFriend.photo = friendArray[i].photo
          bestFriend.diff = totalDifference
      }
  }
  console.log(bestFriend)
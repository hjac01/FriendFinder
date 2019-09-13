var friendArray = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
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
      },
    
      {
        "name": "Jacob Deming",
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        "scores": [
        "4",
        "2",
        "5",
        "1",
        "3",
        "2",
        "2",
        "1",
        "3",
        "2"
        ]
        },
    
        {
          "name": "Jeremiah Scanlon",
          "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
          "scores": [
          "5",
          "2",
          "2",
          "2",
          "4",
          "1",
          "3",
          "2",
          "5",
          "5"
          ]
          },
    ];
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
// retrieving our friends data 
const friends = require('../app/data/friends.js')

// we need to export the JSON readable verion of all friends listed
module.exports = app => {
    // GET all friend data 
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })

    // POST a friend 
    app.post('/api/friends', (req, res) => {
        const friendScore = req.body.scores
        const scoresArr = [] 
        const friendCount = 0 
        const bestFriend = 0

        // looping through current friends in list with variable i 
        for(var i = 0; i < friends.length; i++) {
            const scoreDiff = 0
        // looping through to compare new friends with variable j 
        for(var j = 0; j < friendScore.length; j++) {
            scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendScore[j])))
        }

        // we push the results to scoresArr 
        scoresArr.push(scoresDiff)
        }

        // find the best match after we loop through and compare all friends 
        for(var i = 0; i < scoresArr.length; i++) {
            if(scoresArr[i] <= scoresArr[bestFriend]) {
                bestFriend = i 
            }
        }

        // return our data on the bestFriend match 
        const bestFriendMatch = friends[bestFriend]
        res.json(bestFriendMatch)

        // new match data pushd into friends array 
        friends.push(req.body)
    })
}
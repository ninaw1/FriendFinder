// retrieving our friends data 
const friendList = reuqire('../data/friends.js')

// we need to export the JSON readable verion of all friends listed
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendList)
    })
}
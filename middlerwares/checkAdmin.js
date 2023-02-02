module.exports = function checkAdmin(req ,res , next) {
    let username = req.session.username
    console.log(username)
    if(username === "admin"){
        next();
    }
    else{
        return res.send("You don't have permission to access this page")
    }
}

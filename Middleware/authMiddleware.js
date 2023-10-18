const authMiddleware = (req,res,next) =>{
    console.log(" Routing Middleware is Present");
    const age = 20;
    if (age > 18) {
        next();
    } else {
        return res.send("User not allowed due to age restrictions")
    }
}

module.exports = authMiddleware;

//We have created Routing level middleware
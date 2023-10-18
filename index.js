const express = require('express');
const createRoute = require('./Router/createRoute');
const app = express();
const PORT = 5000;

const middleware=(req,res,next) => { //Middleware for all routes basically Application level middleware
    console.log("Middleware1 run first and it will hit the api");
    next();
}

app.use('/api', createRoute);
app.use(middleware) //middleware 

app.get('/', (req,res) =>{ // http://localhost:5000/api
    return res.send('API RUNNING STATUS OK')
})


app.listen(PORT, () =>{
    try {
        console.log(`Server running at port: ${PORT}`);
    } catch (error) {
        console.log(`ERROR : ${error}`);
    }
})
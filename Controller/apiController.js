const {bollywood,hollywood,technology,fitness,food} = require('../dataDummy')

const bollyController = (req,res) =>{
    return res.send(bollywood);
};

const hollyController = (req,res) =>{
    return res.send(hollywood);
};

const techController = (req,res) =>{
    return res.send(technology);
};

const fitnessController = (req,res) =>{
    return res.send(fitness);
};

const foodController = (req,res) =>{
    return res.send(food);
};

module.exports = {bollyController,hollyController,techController,fitnessController,foodController};

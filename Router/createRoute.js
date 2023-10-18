const {bollyController,hollyController,fitnessController,techController,foodController} = require('../Controller/apiController')
const auth = require('../Middleware/authMiddleware');
const createRoute = require('express').Router();

createRoute.get('/bollywood',auth, bollyController); //auth is routing middleware

createRoute.get('/hollywood',auth, hollyController); //auth is routing middleware

createRoute.get('/technology', techController);

createRoute.get('/fitness', fitnessController);

createRoute.get('/food', foodController);

module.exports = createRoute;
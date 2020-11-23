/*
* Title: Route 
* Description: Application Route
* Author: Solaiman Shadin
* Date: 11/23/2020
*
*/ 

// dependencies 
const {sampleHandler} = require('./handlers/RouteHandlers/SampleHandler');
const routes = {
    sample : sampleHandler,
}

module.exports = routes
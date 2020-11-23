/*
* Title: sample handler 
* Description: sample handler
* Author: Solaiman Shadin
* Date: 11/23/2020
*
*/ 

// Module scaffolding

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {message: "Not found!"})
}

module.exports = handler;
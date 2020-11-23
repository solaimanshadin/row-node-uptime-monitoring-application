/*
* Title: sample handler 
* Description: sample handler
* Author: Solaiman Shadin
* Date: 11/23/2020
*
*/ 

// Module scaffolding

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    callback(200, {message: "Wow ! You are on sample"})
}

module.exports = handler;
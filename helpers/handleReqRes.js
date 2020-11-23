/*
* Title: Row Node js 
* Description: A RESTFul API to monitor up or down time of user defined links
* Author: Solaiman Shadin
* Date: 11/23/2020
*
*/ 

// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes  = require('../routes');
const { notFoundHandler } = require('../handlers/RouteHandlers/NotFoundHandler')
// module scaffolding

const handler = {};

handler.handleReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    const method = req.method.toLowerCase();

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        queryStringObject,
        headersObject,
        method
    }
    
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler 

    chosenHandler(requestProperties, (statusCode, payload) => {
        
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        res.writeHead(statusCode);
        res.end(payloadString)
    })

    req.on('data', (buffer) => {
        realData += decoder.write(buffer)
    })

    req.on('end', () => {
        realData += decoder.end();
    })
    console.log(realData)

}

module.exports = handler
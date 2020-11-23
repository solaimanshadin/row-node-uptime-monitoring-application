/*
* Title: Row Node js 
* Description: A RESTFul API to monitor up or down time of user defined links
* Author: Solaiman Shadin
* Date: 11/23/2020
*
*/ 

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {}

// configuration
app.config = {
    port: 3030
}

// Create Server
app.createServer = () => {
    const server = http.createServer(handleReqRes)
    server.listen(app.config.port, (err) => {
        if(err) {
            console.log("Failed to start server")
        }else{
            console.log("Listening to port: ", app.config.port)
        }
    })
}


app.createServer()
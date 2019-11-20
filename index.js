var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.on("connection", function(ws) {
  //var id = setInterval(function() {
   // ws.send(JSON.stringify(new Date()), function() {  })
  //}, 1000)

  console.log("websocket connection open")
  
  wss.on("message", function incoming(data) {
    console.log(data+'recieved in Heroku');
    // if you want to send that message back to the client who sent it, 
    // you can use send method on the socket
     ws.send(data + 'Sent from Heroku', function() {  })
  });
  
  
  ws.on("close", function() {
    console.log("websocket connection close")
    clearInterval(id)
  })
  
  
})

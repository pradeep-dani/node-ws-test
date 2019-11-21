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
  

  console.log("websocket connection open")
  
  
  ws.on("close", function() {
    console.log("websocket connection close")
    //clearInterval(id)
  })
  
  ws.on('message', function incoming(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    //var id = setInterval(function() {
      
   // }, 1000)
    
    ws.send(JSON.stringify(data) + ' -- Verified --', function() {  })
    
  });
  
  
})

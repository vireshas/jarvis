var WebSocket = require("ws")

  var ws = new WebSocket('ws://localhost:3000');
var hostname = "viresh"
msg = {user: hostname, room: "", message: ""}

ws.on('open', function open() {
 msg["message"] = "list_users"
 ws.send(JSON.stringify(msg));
});

ws.on('message', function(data, flags) {
   console.log(data)
});

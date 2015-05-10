var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.1.105:1883');
 
client.on('connect', function () {
  client.subscribe('presence');
  client.subscribe('echo/presence');
  client.publish('presence', 'Hello mqtt');
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log("Message from topic " + topic + ": " + message.toString());
  client.end();
});
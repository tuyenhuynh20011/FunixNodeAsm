const http= require('http');
const routes=require('./routes.js');

const sever=http.createServer(routes.handler)

console.log(routes.someText)

sever.listen(3000);
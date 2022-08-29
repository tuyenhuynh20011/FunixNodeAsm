const http= require('http')

const sever=http.createServer((req, res)=> {
    console.log(req);
})

sever.listen(3000);
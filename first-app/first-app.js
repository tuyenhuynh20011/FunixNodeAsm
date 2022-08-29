const http= require('http')

const sever=http.createServer((req, res)=> {
    console.log(req);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Myfirst page </title></head>');
    res.write('<body><h1>My first server</h1></body>');
    res.write('</html>');
    res.end();
})

sever.listen(3000);
const http= require('http')
const fs= require('fs');
const sever=http.createServer((req, res)=> {
    const url=req.url;
    if(url === '/')
    {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>enter messenge</title></head>');
        res.write('<body><form action="/messege" method="POST"><input type="text" name="messege"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();

    }
    if(url === '/message' && method === 'POST')
    {
        const body=[] ;
        req.on('data', (chunk)=> {
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', ()=>{
            const parseBody=Buffer.concat(body).toString();
            console.log(parseBody);
        })
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode=302;
        res.setHeader('location','/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Myfirst page </title></head>');
    res.write('<body><h1>My first server have path / </h1></body>');
    res.write('</html>');
    res.end();
})

sever.listen(3000);
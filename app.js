const http = require('http')
const fs = require('fs')



const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/'){
        res.write('<body> <form method="POST" action="/message" > <input type="text" name="message"> <button type="submit">Send</button> </input> </form> </body>')
        return res.end();
    }

    
    if (url === '/message' && method === "POST"){
        fs.writeFileSync("message.txt", 'DUmmy')
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end()
    }

    res.setHeader('Content-type', 'text/html')
    res.write("<h1>Hello people</h1>")
});

server.listen(3000)
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/'){
        res.write('<h1> Server Created! </h1>')
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
          );
        return res.end()
    }

    if (url === '/users'){
        res.write('<ul> <li> Server Created! </ul>')
        return res.end()
    }
    if (url === '/create-user' && method === 'POST'){
            const body = []
            req.on('data', (chunk) => {
                body.push(chunk)
            })

            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const msg = parsedBody.split('=')[1]
                console.log(msg)

            })
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()
    }
})


server.listen(3000)
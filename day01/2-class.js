const http = require('http')
const querystring = require('querystring')


const server = http.createServer((req, res) => {
  let data = ''
  req.on('data', (chunk) => {
    data += chunk
  })
  req.on('end', () => {
    console.log(data)
    const post = querystring.parse(data)
    console.log(post)
  })
})

server.listen(8080)
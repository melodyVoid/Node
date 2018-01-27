const http = require('http')
const urlLib = require('url')

const server = http.createServer((req, res) => {
  const {pathname, query} = urlLib.parse(req.url, true)
  console.log(pathname, query)
  res.write('hello')
  res.end()
})

server.listen('8080')


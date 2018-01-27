const http = require('http')
const urlLib = require('url')
const querystring = require('querystring')
const fs = require('fs')


const server = http.createServer((req, res) => {
  // GET
  const { pathname, query } = urlLib.parse(req.url, true)

  // POST
  let data = ''
  req.on('data', chunk => {
    data += chunk
  })
  req.on('end', () => {
    const post = querystring.parse(data)
    const filename = './static' + pathname
    fs.readFile(filename, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.write(data)
      }
      res.end()
    })
  })
})

server.listen(8080)
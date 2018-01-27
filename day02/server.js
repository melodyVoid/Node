const express = require('express')

const server = express()
const expressStatic = require('express-static')
server.use('/a.html', (req, res) => {
  res.send('111')
  res.end()
})

server.use('/b.html', (req, res) => {
  res.send('222')
  res.end()
})
server.use(expressStatic('./static'))

server.listen(8080)
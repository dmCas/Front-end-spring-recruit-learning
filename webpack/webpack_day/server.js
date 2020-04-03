const express = require('express')
const app = express()

app.get('/api/info', (req, res) => {
  res.json({
    name: 'lm',
    msg:'欢迎来到 webpack'
  })
})

app.listen('3000')
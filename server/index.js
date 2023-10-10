const express = require('express')
const cors = require('cors')
const path = require('path')
const router = require('./routes/index')


const PORT = 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', router)

app.use('/', express.static(path.resolve(__dirname, '..', 'client', 'dist')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'))
})

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  } catch (e) {
    console.warn('INIT APPLICATION ERROR:', e)
  }
}

start ()
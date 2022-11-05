import {} from "express"
import app from './app'

const port = 3000;

app.get('/', async (req, res) => {
res.end('1 + 1 = ?')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
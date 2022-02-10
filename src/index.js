const express = require('express')
const app = express()
const port = 8545

app.post('/', (req, res) => {
  res.send({
        "id": 1337,
        "jsonrpc": "2.0",
        "error": {
            "code": -32005,
            "message": "Request exceeds defined limit"
        }
    });
})

app.listen(port, () => {
  console.log(`Mock 32005 Eth JSON RPC listening on port ${port}`)
})
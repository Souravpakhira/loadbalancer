const app = require('express')()
const os = require('os')
const port = process.env.PORT || 3000

app.get("/*", (req, res) => {

  const data = {
    "container-id": os.hostname(),
    "server": `Running on port: ${port}`,
    "headers": req.headers,
  }
  res.json(data)
})

app.listen(port, () => console.log(`Server listening on port:${port}`))

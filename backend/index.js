
const express = require('express')
const app = express()
const port = 5000
const mongoDB=require("./db")
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  //res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json())
app.use('/api',require("./routes/Creatuser"));
app.use('/api',require("./routes/Displaydata"));
app.use('/api',require("./routes/Displayjobs"));
app.use('/api',require("./routes/Createjob"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
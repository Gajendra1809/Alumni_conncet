
import express from 'express'
import mongoDB from './db/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import userRouter from './routes/user.route.js'
import jobRouter from './routes/job.route.js'

import authenticate from './middlewares/authenticate.middleware.js'

const app = express()
const port = process.env.PORT || 5000

mongoDB()
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))


const corsOptions = {
  origin: 'http://localhost:3000', // Allow your frontend origin
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(express.json())

app.use('/api/user', userRouter);
app.use('/api/job', authenticate, jobRouter);
// app.use('/api',require("./routes/Creatuser"));
// app.use('/api',require("./routes/Displaydata"));
// app.use('/api',require("./routes/Displayjobs"));
// app.use('/api',require("./routes/Createjob"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
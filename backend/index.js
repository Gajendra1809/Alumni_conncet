
import express, { application } from 'express'
import mongoDB from './db/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import userRouter from './routes/user.route.js'
import jobRouter from './routes/job.route.js'
import messageRouter from './routes/message.route.js'
import applicationRouter from './routes/application.route.js'

const app = express()
const port = process.env.PORT || 5000

mongoDB()
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))


const corsOptions = {
  origin: 'http://localhost:3000', // Allow the frontend origin
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(express.json())

app.use('/api/user', userRouter);
app.use('/api/job', jobRouter);
app.use('/api/message', messageRouter);
app.use('/api/application', applicationRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
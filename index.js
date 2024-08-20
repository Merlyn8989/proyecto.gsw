import  express from 'express'
import { configDotenv } from "dotenv"
import ConnectionMongodb from './database/mongo.db.js'
import router  from './router/router.user.js'
import cors from 'cors'
 
configDotenv()
const port = process.env.PORT
const host = process.env.HOSTNAME

const app = express()
ConnectionMongodb()
app.use(cors())
app.use(express.json())
app.use("/api", router)

app.get('/', (req, res) => res.send('Hello merlyn'))
app.listen(port, () => console.log(`RUN SERVER IN ${host} : ${port}`));
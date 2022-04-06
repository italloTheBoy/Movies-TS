import { morganMiddleware as morgan } from './middleware/morganMiddleware';
import { logger } from '../config/logger';
import { router } from './routes/routes'
import { connect } from '../config/db';
import express from 'express';
import config from 'config'

const app = express()

const port = config.get<number>('port')

app.use(express.json())
app.use(morgan)
app.use(router)


app.listen(port, async () => {
  await connect()
  logger.info(`Server running in http://localhost:${port}`)
})
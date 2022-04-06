import morgan, {StreamOptions} from "morgan"
import { logger } from "../../config/logger"
import config from "config"

const stream: StreamOptions = {
  write(message) {
    logger.http(message)
  }
}

function skip () {
  const env = config.get<string>('env') || 'development'
  return env !== 'development'
}

export const morganMiddleware = morgan(
  ':method :status :url | :res[content-length] - :response-time ms',
  { stream, skip }
) 
import dotenv from 'dotenv'
dotenv.config()

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

export default {
  env: process.env.ENV,
  port: Number(process.env.PORT) || 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.fsvqw.mongodb.net/movies?retryWrites=true&w=majority`,
}
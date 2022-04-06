import { logger } from "./logger"; 
import mongoose from "mongoose";
import config from "config";


export async function connect() {
  const uri = config.get<string>('dbUri')
  
  try {
    await mongoose.connect(uri)
  }
  catch (err) {
    logger.error(err)
    return process.exit(1)
  }

} 
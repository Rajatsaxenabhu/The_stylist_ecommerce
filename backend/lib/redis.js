import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis({
    host: 'redis', 
    port: 6379,      
  });

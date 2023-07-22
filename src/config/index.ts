import dotenv from "dotenv";
import Config from "./Config";
dotenv.config();

const config: Config = {
  ENVIRONMENT: process.env.NODE_ENV,
};

export default config;

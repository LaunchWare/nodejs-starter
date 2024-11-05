import path from "node:path"

import { config as dotEnvConfig } from "dotenv"

export class ServerConfiguration {
  private static instance: ServerConfiguration | undefined

  private constructor() {
    dotEnvConfig({
      path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || ""}`),
    })
  }

  get port() {
    return process.env.PORT || "3000"
  }

  get logLevel() {
    return process.env.LOG_LEVEL || "info"
  }

  get nodeEnv() {
    return process.env.NODE_ENV || "development"
  }

  public static getInstance(): ServerConfiguration {
    if (!ServerConfiguration.instance) {
      ServerConfiguration.instance = new ServerConfiguration()
    }
    return ServerConfiguration.instance
  }
}

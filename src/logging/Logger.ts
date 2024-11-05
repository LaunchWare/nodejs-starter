import { pino } from "pino"
import { pinoHttp } from "pino-http"

import { ServerConfiguration } from "@/configuration/ServerConfiguration.js"

export class Logger {
  private static instance: Logger | undefined

  private serverConfiguration: ServerConfiguration
  private pinoInstance: pino.Logger

  private constructor(serverConfiguration: ServerConfiguration) {
    this.serverConfiguration = serverConfiguration

    this.pinoInstance = pino({
      level: this.serverConfiguration.logLevel || "info",
      transport: this.transport,
    })
  }

  public info(message: string, ...args: unknown[]): void {
    this.pinoInstance.info(message, ...args)
  }

  public warn(message: string, ...args: unknown[]): void {
    this.pinoInstance.warn(message, ...args)
  }

  public error(message: string, error?: Error): void {
    this.pinoInstance.error({ error }, message)
  }

  public debug(message: string, ...args: unknown[]): void {
    this.pinoInstance.debug(message, ...args)
  }

  public getMiddleware() {
    return pinoHttp({
      logger: this.pinoInstance,
      customProps: (req, res) => ({
        method: req.method,
        url: req.url,
        statusCode: res.statusCode,
        responseTime: res.getHeader("X-Response-Time"),
      }),
      customLogLevel: (_req, res, err) => {
        if (res.statusCode >= 400 && res.statusCode < 500) {
          return "warn"
        } else if (res.statusCode >= 500 || err) {
          return "error"
        } else if (res.statusCode >= 300 && res.statusCode < 400) {
          return "silent"
        }
        return "info"
      },
    })
  }

  public child(bindings: pino.Bindings): Logger {
    const childLogger = new Logger(this.serverConfiguration)
    childLogger.pinoInstance = this.pinoInstance.child(bindings)
    return childLogger
  }

  private get transport() {
    if (this.serverConfiguration.nodeEnv !== "production") {
      return {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      }
    }
    return undefined
  }

  static getInstance() {
    if (!Logger.instance) {
      const serverConfiguration = ServerConfiguration.getInstance()
      Logger.instance = new Logger(serverConfiguration)
    }
    return Logger.instance
  }
}

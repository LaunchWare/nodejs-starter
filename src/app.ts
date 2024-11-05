import path from "node:path"

import bodyParser from "body-parser"
import express, { Request, Response, static as staticMiddleware } from "express"

import { ServerConfiguration } from "./configuration/ServerConfiguration.js"
import { Logger } from "./logging/Logger.js"

const app = express()
const serverConfiguration = ServerConfiguration.getInstance()
const { port } = serverConfiguration

const logger = Logger.getInstance()

app.use(logger.getMiddleware())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(staticMiddleware(path.join(__dirname, "public")))

app.get("/", (_req: Request, res: Response) => {
  res.json({ status: "OK" })
})

app.listen(port, () => {
  logger.info(`🚀 Server is listening on port ${port}`)
})

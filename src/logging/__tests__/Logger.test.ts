import { Logger } from "../Logger.js"

describe("Logger", () => {
  it("is a singleton", () => {
    const logger = Logger.getInstance()
    const otherLogger = Logger.getInstance()
    expect(otherLogger).toEqual(logger)
  })

  it("delegates info to the internal library", () => {
    const logger = Logger.getInstance()
    const infoSpy = vi.spyOn(logger["pinoInstance"], "info")
    const testMessage = "This is a test message"

    logger.info(testMessage)

    expect(infoSpy).toHaveBeenCalledWith(testMessage)

    infoSpy.mockRestore()
  })
})

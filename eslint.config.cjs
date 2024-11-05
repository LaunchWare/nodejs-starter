const { getConfiguration } = require("@launchware/eslint-config-node")

const launchEslint = getConfiguration({ tsconfigRootDir: __dirname })
module.exports = [...launchEslint.configs.recommended]

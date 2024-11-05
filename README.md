
# LaunchWare NodeJS Starter

## Philosophy

This is intended to be an extremely barebones setup that includes some of our favorite tools:

- [DotEnv](https://www.npmjs.com/package/dotenv) - Easily configure secrets and configuration values via environment variables.
- [Express](https://expressjs.com/) - Widely adopted, minimalist web framework.
- [TypeScript](https://www.typescriptlang.org/) - Strict typing to ensure software is delivered qualitatively.
- [Pino](https://getpino.io/#/) - Lightweight logging with a supplied wrapper.
- [ESLint](https://eslint.org/) - Code formatting with LaunchWare's opinionated [eslint-config-node](https://www.npmjs.com/package/eslint-config-node).
- [Prettier](https://prettier.io/) - More code formatting.
- [Vitest](https://vitest.dev/) - Unit testing framework.
- [pnpm](https://pnpm.io/) - Performant package management.
- [asdf](https://asdf-vm.com/) - Platform-agnostic version management.

## Get Started

### Prerequisites

Install [asdf](https://asdf-vm.com/guide/getting-started.html).

### Getting Up and Running

```bash
pnpm dlx degit launchware/nodejs-starter <destinationDir>
cd <destinationDir>
asdf install
pnpm install
pnpm dev
```


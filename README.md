# LaunchWare NodeJS Starter

## Philosophy

This is intended to be an extremely barebones set up that includes some of our
favorite tools:

- [DotEnv](dotenv) - Easily configure secrets and configuration values via
  environment variables
- [Express](express) - widely adopted, minimalist web framework
- [TypeScript](typescript) - strict typing to ensure software is delivered
  qualitatively
- [Pino](pino) - lightweight logging with a supplied wrapper
- [ESLint](eslint) - code formatting with LaunchWare's opinionated
  [eslint-config-node](eslint-config-node)
- [Prettier](prettier) - more code formatting
- [Vitest](vitest) - unit testing
- [pnpm](pnpm) - performant package management
- [asdf](asdf) - platform agnostic version management

## Get Started

### Prerequisites

Install [asdf](asdf-install-instructions)

### Getting Up and Running

```bash
pnpm dlx degit launchware/nodejs-starter <destinationDir>
cd <destinationDir>
asdf install
pnpm install
pnpm dev
```

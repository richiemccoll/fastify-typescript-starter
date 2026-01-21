# Fastify TypeScript Starter Template

This repo provides a template for building Fastify-based Node.js (v24) applications using TypeScript.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version `22.15.0` recommended, see `.nvmrc`)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

### Development

Start the development server with hot-reloading:

```bash
npm run dev
```

The server will run on `http://localhost:8080`.

### Testing

Run the test suite:

```bash
npm test
```

### Linting

Lint the codebase:

```bash
npm run lint
```

### Docker

Build the Docker image:

```bash
npm run docker:build
```

Start the Docker container:

```bash
npm run docker:start
```
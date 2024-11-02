# Monorepo Application Setup

This monorepo contains a Next.js frontend and an Express backend, both written in TypeScript. The project uses `pnpm` for package management and Turborepo for managing the monorepo.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** installed (version 14.x or higher)
- **pnpm** installed globally
- **Git** installed

### Install pnpm Globally

If you haven't installed `pnpm` yet, you can install it globally using:

```bash
npm install -g pnpm
```

## Scripts

The root package.json includes the following scripts:

- pnpm dev: Runs the development servers for both frontend and backend.
- pnpm build: Builds both the frontend and backend applications.

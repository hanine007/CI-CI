# 🚀 Node.js CI/CD Pipeline Example

[![CI/CD Pipeline](https://github.com/<YOUR_USERNAME>/<YOUR_REPO>/actions/workflows/ci.yml/badge.svg)](https://github.com/<YOUR_USERNAME>/<YOUR_REPO>/actions)

This project demonstrates a complete **CI/CD pipeline** using **GitHub Actions** with a simple Node.js API.

## 🛠 Tech Stack

- Node.js (v16, v18)
- npm
- GitHub Actions (CI/CD)

## ✅ Features

- 🔁 **Workflow triggers**:
  - `push` to `main`
  - `pull_request`
  - Manual trigger (`workflow_dispatch`)
  - Scheduled runs (`cron` every day at 2am)

- 🧪 **CI Matrix Strategy**:
  - Node.js versions: `16.x`, `18.x`
  - OS: `ubuntu-latest`, `macos-latest`, `windows-latest`

- 📦 **Steps per job**:
  - Checkout code
  - Setup Node.js version
  - Install dependencies (`npm ci`)
  - Run tests (`npm test`)
  - Upload test results as artifacts

## 📁 Project Structure

```bash
.
├── .github
│   └── workflows
│       └── ci.yml         # GitHub Actions workflow
├── tests/                 # Test output directory
├── package.json
├── index.js               # Entry point
└── README.md              

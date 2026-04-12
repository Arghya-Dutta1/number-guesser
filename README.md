# number-guesser! [Coverage](https://img.shields.io/badge/coverage-0%25-red)

# 🤖 Number Guesser + DevOps Pipeline

A fun mini-project where it guesses the number you’re thinking of using **binary search**, combined with a **production-style CI/CD pipeline** including linting, testing, coverage tracking, and a custom dashboard.

---

## 🚀 Features

### 🎮 Core App

* Guesses your number (1–100)
* Uses efficient binary search logic
* Interactive UI with user feedback (Too High / Too Low / Correct)

---

### 🧪 CI/CD & DevOps

* ESLint for static code analysis
* Jest for unit testing
* Code coverage tracking
* Automated PR comments with lint & coverage reports
* Coverage enforcement (fails if < 40%)
* Weekly scheduled CI run (Sunday night)
* Manual workflow trigger (workflow_dispatch)
* Auto-updating coverage badge

---

### 📈 Coverage Dashboard

* Stores historical coverage data (coverage-history.json)
* Visualizes trends using Chart.js
* Helps track code quality over time

---

## 🏗️ Project Structure

```
.
├── index.html
├── style.css
├── script.js
├── tests/
│   └── guess.test.js
├── coverage-history.json
├── dashboard/
│   ├── index.html
│   └── script.js
├── .github/
│   └── workflows/
│       ├── lint.yml
│       └── coverage.yml
├── package.json
└── README.md
```

---

## ⚙️ Setup & Run

### 1. Clone the repo

```
git clone <your-repo-url>
cd <repo-name>
```

### 2. Install dependencies

```
npm install
```

### 3. Run locally

Open index.html in your browser

---

## 🧪 Run Tests

```
npm test
```

### 📊 Run Coverage

```
npm run test:coverage
```

---

## 🚀 GitHub Actions Workflows

### 🔹 Lint Workflow

* Runs ESLint on every PR
* Posts results as PR comments

### 🔹 Coverage Workflow

* Runs tests with coverage
* Enforces minimum threshold (40%)
* Updates coverage badge
* Stores historical data
* Runs on:

  * Pull Requests
  * Manual trigger
  * Weekly cron

---

## 📊 Coverage Badge

![Coverage](https://img.shields.io/badge/coverage-20%25-red)

(Auto-updated via GitHub Actions)

---

## 📈 Dashboard

To view coverage trends:

* Open /dashboard/index.html
* Or deploy via GitHub Pages

---

Built for learning, fun, and leveling up 🚀
# Leaf Ledger 🌿

A clean, minimalist, and dependable plant care tracker designed to help plant owners organize their indoor green sanctuaries and never miss a watering day.

---

## 🎯 Introduction & Objective

**Leaf Ledger** is built with simplicity, speed, and privacy in mind. Plant enthusiasts often struggle to maintain diverse watering intervals across multiple rooms and species. Leaf Ledger solves this by providing a lightweight, responsive dashboard where users can catalog their plants, track personalized watering schedules, check urgent care statuses at a glance, and record watering history in real time. 

All state is persisted locally using the browser's `localStorage` wrapped with error handling, ensuring complete privacy with zero external tracking, zero dependencies, and no build step required.

---

## 👤 Project Author Information

- **Student Name:** [FRIEND FULL NAME]
- **Class & Institution:** [CLASS AND COLLEGE]
- **Repository:** [https://github.com/patilshravani3687-sudo/leaf-ledger](https://github.com/patilshravani3687-sudo/leaf-ledger)

---

## 🛠 Technology Stack

- **HTML5:** Semantic markup structured for high accessibility and screen-reader compatibility.
- **CSS3:** Custom properties (CSS variables), CSS Grid, Flexbox, responsive layouts, and modern typography using the Google Font **DM Sans**.
- **JavaScript (ES6+):** Pure vanilla JavaScript without external libraries or frameworks; strict enforcement of safe DOM updates via `textContent` and `createElement` (avoiding `innerHTML`), and defensive `localStorage` operations.
- **CI/CD & Automation:** Jenkins Declarative Pipeline on Windows agent utilizing native batch automation and Node.js syntax checks.
- **Version Control:** Git & GitHub with a clean, linear, one-commit-per-feature development history.

---

## 🚀 How to Run Locally

Because Leaf Ledger has zero external runtime dependencies and requires no compilation, running it locally is straightforward:

### Method 1: Direct File Launch
1. Clone the repository:
   ```bash
   git clone https://github.com/patilshravani3687-sudo/leaf-ledger.git
   cd leaf-ledger
   ```
2. Double-click `index.html` or open it with your favorite web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Lightweight Local Server
If you prefer running through a local development server:
```bash
# Using Python 3:
python -m http.server 8000

# Or using Node.js:
npx serve .
```
Then visit `http://localhost:8000` in your browser.

---

## 📋 Incremental Features & Changes

The project was developed iteratively with dedicated commits for each core feature:

| # | Feature / Change | Commit Message | Description |
|---|---|---|---|
| 1 | Mark as Watered | `Add mark as watered button with last watered date` | Adds a "Mark as watered" action button on every card. Clicking it sets the last watered date to today, recalculates the next due date, and displays "Last watered: &lt;date&gt;". |
| 2 | Status Chips | `Add overdue, due today and healthy status chips` | Introduces dynamic color-coded urgency badges: Red "Overdue" for past-due plants, Amber "Due today" for current schedules, and Green "Healthy" for up-to-date plants. |
| 3 | Instant Search | `Add plant search by name or location` | Adds an interactive search input above the plant grid that filters cards in real time by plant name or room location (case-insensitive), with a friendly "No plants match" state. |
| 4 | Sorting Options | `Add sort options for plant list` | Adds a "Sort by" dropdown supporting Next watering, Name (A to Z), and Recently added ordering that seamlessly works alongside active search filters. |
| 5 | Daily Summary Banner | `Add daily summary banner for plants needing water` | Displays an eye-catching summary banner at the top showing "X plants need water today" or celebrating "All plants are happy", updating live on all user actions. |

---

## 🔄 Git & GitHub Workflow

The repository was initialized from scratch following strict git hygiene standards:

1. **Repository Setup:**
   ```bash
   git init
   git branch -M main
   git config user.name "[FRIEND FULL NAME]"
   git config user.email "[FRIEND GITHUB EMAIL]"
   git remote add origin https://github.com/patilshravani3687-sudo/leaf-ledger.git
   ```

2. **Per-Feature Iteration Cycle:**
   For every feature step, JavaScript syntax was verified prior to committing:
   ```bash
   node --check assets/js/app.js
   git add -A
   git commit -m "<Feature Commit Message>"
   git push origin main
   ```

3. **Inspection Commands:**
   ```bash
   git log --oneline
   git status
   ```

---

## ⚙️ Jenkins CI/CD Integration

Leaf Ledger incorporates continuous integration through a declarative pipeline defined in the root `Jenkinsfile` for a Windows build agent:

### Pipeline Configuration Steps
1. **Create Jenkins Job:** Create a new item and select **Pipeline**.
2. **SCM Definition:** In the pipeline configuration section, set **Definition** to **Pipeline script from SCM**.
3. **SCM Provider:** Choose **Git**.
4. **Repository URL:** Enter `https://github.com/patilshravani3687-sudo/leaf-ledger.git`.
5. **Branch Specifier:** Set to `*/main`.
6. **Script Path:** Specify `Jenkinsfile`.

### Pipeline Stages
- **Checkout:** Clones the latest commit from branch `main` using `checkout scm`.
- **Verify Files:** Executes a Windows batch step (`bat`) validating that critical assets (`index.html`, `assets/css/main.css`, and `assets/js/app.js`) are physically present in the workspace.
- **Check JavaScript:** Executes `node --check assets\js\app.js` if Node.js is present on the runner; gracefully falls back with a diagnostic notice if Node is absent without failing the build.
- **Package:** Compresses website assets (`index.html` and `assets/`) into a distribution zip archive (`leaf-ledger-build.zip`) using PowerShell and calls `archiveArtifacts` to store the build artifact.
- **Post Actions:** Provides immediate build status feedback with custom success and failure notification messages.

---

## 📸 Screenshots

The following screenshots demonstrate the application, version control history, and automated build pipeline:

### 1. Running Website Interface
![Running Website](screenshots/website_ui.png)  
*The running Leaf Ledger website featuring the daily status banner, filter toolbar, and plant cards.*

### 2. Git History in Terminal
![Git Terminal Log](screenshots/git_history.png)  
*Linear git log --oneline output in the terminal showing clean, atomic commits.*

### 3. GitHub Commits Page
![GitHub Commits](screenshots/github_commits.png)  
*GitHub repository commit history showing verified sequential feature progression.*

### 4. GitHub Repository Overview
![GitHub Repository Overview](screenshots/repo_overview.png)  
*GitHub repository root view showing directory structure, branch main, and files.*

### 5. Jenkins Pipeline Execution
![Jenkins Pipeline Stages](screenshots/jenkins_pipeline.png)  
*Jenkins declarative pipeline stage view completing Checkout, Verify Files, Check JS, and Package.*

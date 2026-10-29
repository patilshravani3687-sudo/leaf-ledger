# 🌿 Leaf Ledger

A clean, minimalist, and dependable plant care tracker designed to help plant owners organize their indoor green sanctuaries and never miss a watering day.

---

## 🎯 1. Introduction & Objective

**Leaf Ledger** is a lightweight plant care management website designed to help users organize their plants and maintain consistent watering schedules.

Plant owners often struggle to remember watering dates, especially when managing multiple plants with different watering requirements. Leaf Ledger solves this problem through a simple dashboard that allows users to manage plants, track watering schedules, monitor plant status, and record watering activity.

The application provides:

* Plant management and watering schedules.
* Mark-as-watered functionality.
* Automatic watering status updates.
* Search plants by name or location.
* Sorting options for the plant list.
* A daily watering summary.
* Local data storage using browser `localStorage`.

The application runs directly in a web browser without requiring a database server or a complicated installation process.

### Project Objectives

1. Develop a responsive and user-friendly plant care website.
2. Maintain watering schedules and plant care records.
3. Display plant statuses to help users identify plants requiring attention.
4. Use Git and GitHub for version control.
5. Implement continuous integration using Jenkins.
6. Maintain project documentation and screenshot evidence.

---

## 👩‍🎓 2. Student Information

* **Student Name:** Shravani Patil
* **Branch:** Artificial Intelligence and Machine Learning (AIML)
* **Roll Number:** 56
* **Subject:** DevOps and Kubernetes
* **Project Name:** Leaf Ledger
* **GitHub Repository:** [Leaf Ledger](https://github.com/patilshravani3687-sudo/leaf-ledger)

---

## 🛠️ 3. Technology Stack

| Technology        | Purpose                                                                          |
| ----------------- | -------------------------------------------------------------------------------- |
| HTML5             | Structures the website content.                                                  |
| CSS3              | Provides styling, layouts, and responsive design.                                |
| JavaScript (ES6+) | Implements plant tracking and interactive features.                              |
| LocalStorage      | Stores plant information in the browser.                                         |
| Git               | Tracks source code changes and commit history.                                   |
| GitHub            | Hosts the project repository and source code.                                    |
| Jenkins           | Automates project validation and packaging through a CI pipeline.                |
| Node.js           | Performs JavaScript syntax validation when available in the Jenkins environment. |

---

## ✨ 4. Features

### 4.1 Plant Management

Provides a dashboard for organizing plants and viewing their watering information.

### 4.2 Mark as Watered

Allows users to mark a plant as watered and update its last-watered date and next watering schedule.

### 4.3 Plant Status Indicators

Displays color-coded status labels:

* 🔴 **Overdue:** The plant's watering date has passed.
* 🟠 **Due Today:** The plant needs watering today.
* 🟢 **Healthy:** The plant is not currently due for watering.

### 4.4 Instant Search

Allows users to search for plants by name or location.

### 4.5 Sorting Options

Provides options to sort plants by upcoming watering date, alphabetical order, or recently added plants.

### 4.6 Daily Summary

Displays a summary of plants requiring watering, helping users prioritize their plant care activities.

### 4.7 Local Data Persistence

Uses browser LocalStorage to retain saved plant information between page refreshes.

---

## 🚀 5. How to Run the Project

Leaf Ledger is a static website and does not require a database server or a build process.

### Method 1: Download from GitHub

1. Open the [Leaf Ledger repository](https://github.com/patilshravani3687-sudo/leaf-ledger).
2. Click the **Code** button.
3. Select **Download ZIP**.
4. Extract the downloaded ZIP file.
5. Open the project folder.
6. Double-click `index.html`.
7. The website will open in your default browser.

### Method 2: Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/patilshravani3687-sudo/leaf-ledger.git
```

Navigate to the project directory:

```bash
cd leaf-ledger
```

Open `index.html` in a web browser.

### Requirements

* A modern web browser.
* Git, if cloning the repository.
* Node.js, if you want to perform the optional JavaScript syntax check locally.

---

## 📋 6. Incremental Development and Changes

The project was developed incrementally, with individual commits introducing new features.

| No. | Change                | Description                                                                                                                   |
| --- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 1   | Initial Plant Tracker | Created the basic website with plant listings and watering schedules.                                                         |
| 2   | Mark as Watered       | Added a button to record watering activity and update the last-watered date.                                                  |
| 3   | Plant Status Chips    | Added Overdue, Due Today, and Healthy indicators.                                                                             |
| 4   | Plant Search          | Implemented real-time searching by plant name or location.                                                                    |
| 5   | Sorting Options       | Added sorting by watering date, name, and recently added plants.                                                              |
| 6   | Daily Summary Banner  | Added a summary of plants that require watering.                                                                              |
| 7   | Jenkins CI Pipeline   | Added a Jenkinsfile to validate project files, check JavaScript syntax when Node.js is available, and package website assets. |
| 8   | Project Documentation | Added the README file documenting project objectives, features, setup, development history, and CI configuration.             |

These changes are reflected in the repository's commit history.

**Commit history:** [View Leaf Ledger commits](https://github.com/patilshravani3687-sudo/leaf-ledger/commits/main/)

---

## 🔄 7. Git and GitHub Workflow

Git and GitHub were used to maintain version control and track the development of Leaf Ledger.

### Step 1: Initialize Git

```bash
git init
```

### Step 2: Create the Main Branch

```bash
git branch -M main
```

### Step 3: Connect the GitHub Repository

```bash
git remote add origin https://github.com/patilshravani3687-sudo/leaf-ledger.git
```

Run this command only when the remote has not already been configured.

### Step 4: Stage Project Changes

```bash
git add .
```

### Step 5: Commit Changes

```bash
git commit -m "Describe the implemented feature"
```

### Step 6: Push Changes to GitHub

```bash
git push origin main
```

### Step 7: Verify Commit History

```bash
git log --oneline
```

### Step 8: Check Repository Status

```bash
git status
```

Meaningful commits make it easier to track changes, identify development stages, and maintain a history of the project.

---

## ⚙️ 8. DevOps Tool Integration — Jenkins

Jenkins is used to automate project validation and packaging through a Declarative Pipeline.

The pipeline configuration is maintained in the root directory of the repository in a file named `Jenkinsfile`.

### 8.1 Objectives of Jenkins Integration

* Automate project validation.
* Verify that essential project files exist.
* Check JavaScript syntax when Node.js is available.
* Package website files into a ZIP archive.
* Archive the generated build artifact.
* Report the pipeline's success or failure.

### 8.2 Jenkins Pipeline Configuration

1. Install and start Jenkins.

2. Open the Jenkins dashboard.

3. Create a new Jenkins item.

4. Select the **Pipeline** project type.

5. Open the pipeline configuration.

6. Select **Pipeline script from SCM** under Definition.

7. Select Git as the source control system.

8. Enter the repository URL:

   `https://github.com/patilshravani3687-sudo/leaf-ledger.git`

9. Set the branch specifier to `*/main`.

10. Set the script path to `Jenkinsfile`.

11. Save the configuration.

12. Run the pipeline using **Build Now**.

### 8.3 Pipeline Stages

| Stage             | Purpose                                                                      |
| ----------------- | ---------------------------------------------------------------------------- |
| Checkout          | Retrieves the latest project code from GitHub.                               |
| Verify Files      | Checks whether the essential HTML, CSS, and JavaScript files exist.          |
| Check JavaScript  | Runs a JavaScript syntax check if Node.js is available on the Jenkins agent. |
| Package           | Creates a ZIP archive containing the website files.                          |
| Archive Artifacts | Stores the generated ZIP file as a Jenkins build artifact.                   |

### 8.4 Expected Result

After a successful execution, Jenkins should display the completed pipeline stages and make the generated build artifact available.

The actual pipeline result should be verified in Jenkins before claiming successful execution.

### 8.5 Evidence of Integration

Add screenshots showing the actual Leaf Ledger Jenkins job and its results.

Required evidence:

* Jenkins job configuration.
* Pipeline stage view.
* Successful build or relevant console output.
* Archived build artifact, if generated.

---

## 📸 9. Project Screenshots

The following section provides visual evidence of the project interface and development progress.

### 9.1 Leaf Ledger Dashboard

![Leaf Ledger Dashboard](01-dashboard.png)

*Screenshot of the Leaf Ledger dashboard.*

### 9.2 Plant Tracking and Watering Schedule

Add a screenshot showing the plant list, watering information, and plant management features.

### 9.3 Plant Status Indicators

Add a screenshot showing the Overdue, Due Today, and Healthy status labels.

### 9.4 Search and Sorting

Add a screenshot demonstrating the plant search and sorting functionality.

### 9.5 GitHub Repository

Add a screenshot showing the repository files and organized project structure.

### 9.6 Git Commit History

Add a screenshot showing the meaningful commits made during development.

### 9.7 Jenkins Pipeline Execution

Add a screenshot of the actual Leaf Ledger Jenkins pipeline and its execution results.

**Note:** Only the dashboard image is currently linked above. Upload the remaining screenshots to the repository and add their image links before submitting the project.

---

## 📁 10. Project Structure

```text
leaf-ledger/
│
├── index.html
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── app.js
│
├── Jenkinsfile
├── README.md
├── 01-dashboard.png
└── screenshots/
```

The structure organizes the main HTML file, stylesheets, JavaScript, CI pipeline configuration, documentation, and screenshot evidence.

---

## 🔐 11. Privacy and Data Storage

Leaf Ledger stores plant information locally in the browser using LocalStorage.

This approach allows the website to retain information between sessions without requiring a dedicated database server.

Users should note that browser-local data may be lost if the browser's stored site data is cleared.

---

## 🎯 12. Conclusion

Leaf Ledger demonstrates the development of a functional website using HTML, CSS, and JavaScript, along with Git-based version control and Jenkins pipeline automation.

The project provides plant management, watering schedule tracking, status indicators, searching, sorting, and local data persistence.

The incremental commit history demonstrates the development process, while the Jenkins pipeline provides a foundation for automated validation and packaging.

The README documents the project objectives, technology stack, execution instructions, development changes, Git workflow, DevOps configuration, and screenshot evidence.

**Project Repository:** [Leaf Ledger on GitHub](https://github.com/patilshravani3687-sudo/leaf-ledger)


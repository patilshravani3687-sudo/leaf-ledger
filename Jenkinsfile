pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source repository...'
                checkout scm
            }
        }

        stage('Verify Files') {
            steps {
                echo 'Verifying core project files exist...'
                bat '''
                    @echo off
                    if not exist index.html (
                        echo Error: index.html is missing!
                        exit /b 1
                    )
                    if not exist assets\\css\\main.css (
                        echo Error: assets\\css\\main.css is missing!
                        exit /b 1
                    )
                    if not exist assets\\js\\app.js (
                        echo Error: assets\\js\\app.js is missing!
                        exit /b 1
                    )
                    echo All required files (index.html, main.css, app.js) verified successfully.
                '''
            }
        }

        stage('Check JavaScript') {
            steps {
                echo 'Running JavaScript sanity check...'
                bat '''
                    @echo off
                    where node >nul 2>nul
                    if %ERRORLEVEL% EQU 0 (
                        echo Node.js detected. Validating syntax for assets\\js\\app.js...
                        node --check assets\\js\\app.js
                        if %ERRORLEVEL% NEQ 0 (
                            echo JavaScript syntax errors found!
                            exit /b 1
                        )
                        echo JavaScript validation passed without errors.
                    ) else (
                        echo [SKIP] Node.js was not found on this agent. Skipping syntax validation safely.
                    )
                '''
            }
        }

        stage('Package') {
            steps {
                echo 'Packaging static website files into build archive...'
                bat '''
                    @echo off
                    powershell -NoProfile -Command "Compress-Archive -Path index.html, assets -DestinationPath leaf-ledger-build.zip -Force"
                '''
                archiveArtifacts artifacts: 'leaf-ledger-build.zip', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Leaf Ledger CI Pipeline completed successfully! Build artifact packaged and archived.'
        }
        failure {
            echo 'Leaf Ledger CI Pipeline failed. Please check stage logs for diagnostic details.'
        }
    }
}

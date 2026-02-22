pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Cucumber tests') {
            steps {
                bat 'npx cucumber-js'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/reports/**', allowEmptyArchive: true
        }
    }
}
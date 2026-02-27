node {
    stage('Checkout') {
        checkout scm
    }

    stage('Verify Node & NPM') {
        bat 'node -v'
        bat 'npm -v'
    }

    stage('Install dependencies') {
        bat 'npm ci'
        bat 'npx playwright install --with-deps'
    }

    stage('Run Playwright Cucumber tests') {
        bat 'npx cucumber-js'
    }
}
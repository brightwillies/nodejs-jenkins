pipeline {
    agent any
    stages {
        stage("checkout") {
            steps {
                checkout scm
            }
        }
        stage("Test") {
            steps {
                bat 'sudo npm install'
                bat 'npm test'
            }
        }
        stage("Build") {
            steps {
                bat 'npm run build'
            }
        }
    }
}

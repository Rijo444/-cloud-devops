pipeline {
    agent any

    stages {

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t cloud-devops-backend .'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t cloud-devops-frontend .'
                }
            }
        }
    }
}
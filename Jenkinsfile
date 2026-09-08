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

        stage('Push Images to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {

                    sh '''
                        docker login -u $DOCKER_USER -p $DOCKER_PASSWORD

                        docker tag cloud-devops-backend $DOCKER_USER/cloud-devops-backend:latest
                        docker tag cloud-devops-frontend $DOCKER_USER/cloud-devops-frontend:latest

                        docker push $DOCKER_USER/cloud-devops-backend:latest
                        docker push $DOCKER_USER/cloud-devops-frontend:latest

                        docker logout
                    '''
                }
            }
        }
    }
}

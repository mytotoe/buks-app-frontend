pipeline {
    agent any
    environment {
        PROJECT_ID = "cloud-school-project-330005"
        CLUSTER_NAME = "test-cluster"
        LOCATION = "us-central1-c"
        CREDENTIALS_ID = 'cloud-school-project'
    }
    stages {
        stage('Scm Checkout') {
            steps {
                git "https://github.com/Japhetism/buks-app-frontend.git"
            }
        }
        stage('Build Docker Image') {
            steps {
                sh "docker build -t japhetism/gcp-buks-frontend:${env.BUILD_ID} ."  
            }
        }
        stage('Push Docker Image') {
            steps {
                withCredentials([string(credentialsId: 'DOCKER_HUB_CREDENTIALS', variable: 'dockerHubCredentials')]) {
                    sh "docker login -u japhetism -p ${dockerHubCredentials}"
                }
                sh "docker push japhetism/gcp-buks-frontend:${env.BUILD_ID}"
            }
        }
        stage('Deploy to GKE') {
            steps{
                sh "sed -i 's/tagversion/${env.BUILD_ID}/g' deployment.yml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
        }
    }
}

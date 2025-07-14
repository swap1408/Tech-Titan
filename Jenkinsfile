pipeline {
  agent any
 
  environment {
    DOCKER_IMAGE = "priacc-frontend"
  }
 
  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/your-username/priacc-frontend.git'
      }
    }
 
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
 
    stage('Build React App') {
      steps {
        sh 'npm run build'
      }
    }
 
    stage('Docker Build') {
      steps {
        sh 'docker build -t $DOCKER_IMAGE .'
      }
    }
 
    stage('Docker Run (Test)') {
      steps {
        sh 'docker run -d -p 3000:80 $DOCKER_IMAGE'
      }
    }
  }
 
  post {
    success {
      echo '✅ React frontend built and running in Docker!'
    }
    failure {
      echo '❌ Something went wrong in the pipeline.'
    }
  }
}

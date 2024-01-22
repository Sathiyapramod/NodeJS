pipeline {
  agent {
    docker { 
      image 'docker:20.10.13' // Use an image with Docker installed
      args '-v /var/run/docker.sock:/var/run/docker.sock' // Mount Docker socket
    }
  }
  stages {
    stage('Initial'){
      steps {
        echo 'Initial ...'
        sh 'docker --version'
        sh 'docker build -t backend_pipeline .'
      }
    }
    stage('Final'){
      steps {
        echo 'Final...'
      }
    }
  }
}

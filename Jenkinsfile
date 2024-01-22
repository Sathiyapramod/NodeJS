pipeline {
  agent any
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

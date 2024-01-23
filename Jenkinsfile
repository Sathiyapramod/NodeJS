pipeline {
     agent any 
     stages {
          stage('initial'){
               steps {
                    echo 'Hello World..!'
                    // sh 'docker --version'
                    sh 'sonar-scanner'
               }
          }
     }
}

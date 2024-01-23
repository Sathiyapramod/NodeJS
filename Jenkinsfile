pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    script {
                         def myValidation = sh(script:'sonar-scanner',returnStatus: true).trim()
                    echo "${myValidation}"
                    }
               }
          }
     }
}

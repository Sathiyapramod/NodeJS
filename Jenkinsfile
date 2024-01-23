pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    echo 'Sonar Cloud Validation.,!'
                    script {
                         def validationScript = sh(script:'sonar-scanner',returnStdout: true).trim()
                         echo '${validationScript}'
                    }
               }
          }
     }
}

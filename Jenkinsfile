pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    script {
                         def myValidation = sh(script:'sonar-scanner')
                    echo '${myValidation}'
                    }
               }
          }
     }
}

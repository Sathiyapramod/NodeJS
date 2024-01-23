pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    def myValidation = sh(script:'sonar-scanner')
                    echo '${myValidation}'
               }
          }
     }
}

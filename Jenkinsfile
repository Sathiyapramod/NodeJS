pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    script {
                         def apiURL = sh(script:'curl -s https://sonarcloud.io/project/overview?id=sathiyapramod22&metricKeys=coverage',returnStdout:true).trim()
                         echo "${apiURL}"
                    }
               }
          }
     }
}

pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    script {
                         def apiURL = sh(script:"curl -s 'https://sonarcloud.io/api/measures/component?componentKey=sathiyapramod22&metricKeys=coverage'",returnStdout:true).trim()
                         echo "${apiURL}"

                         def jsonResponse = readJSON apiURL
                         
                         def coveragePercentage = jsonResponse.component.measures[0].value
                         echo "Coverage Percentage: $coveragePercentage%"
                    }
               }
          }
     }
}

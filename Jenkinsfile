pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    script {
                         def apiURL = sh(script:"curl -s 'https://sonarcloud.io/api/measures/component?componentKey=sathiyapramod22&metricKeys=coverage'",returnStdout:true).trim()
                         echo "${apiURL}"
                         def parsedJson = readJSON(text:apiURL)
                         echo "${parsedJson}"
                         // def coveragePercentage = parsedJson.component.measures[0].value
                         // echo "Coverage Percentage: $coveragePercentage%"
                    }
               }
          }
     }
}

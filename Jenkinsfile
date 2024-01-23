import groovy.json.JsonSlurperClassic

pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    echo 'hello world'
                    script {
                         def scanReport = sh(script:'sonar-scanner',returnStatus: true)
                         echo "${scanReport}"
                         if (scanReport != 0) {
                                  echo "Error: Command exited with status ${status}"
                         } 
                         else {
                              echo "Command executed successfully"
                              def apiURL = sh(script:"curl -s 'https://sonarcloud.io/api/measures/component?componentKey=sathiyapramod22&metricKeys=coverage'")
                              echo "list of bugs - ${apiURL}"

                              def jsonSlurper = new JsonSlurperClassic()
                              def jsonResponse = jsonSlurper.parseText(apiURL)

                              echo "jsonResponse ${jsonResponse}"

                              // def coveragePercentage = jsonResponse.component.measures[0].value 
                              // echo "Coverage Percentage: $coveragePercentage%"
                         } 
                    }
                    
               }
          }
     }
}

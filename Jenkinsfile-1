import groovy.json.JsonSlurperClassic

pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    echo 'hello world'
                    // sh 'sonar-scanner'
                    script {
                         def validate = sh(returnStatus: true, script:"sonar-scanner")
                         if(validate != 0) {
                                  echo "Error: Command exited with status ${status}"
                         }
                         else {
                         def apiURL = sh(script:"curl -s 'https://sonarcloud.io/api/measures/component?componentKey=sathiyapramod22&metricKeys=bugs,code_smells,coverage'", returnStdout:true).trim()
                         
                         def jsonSlurper = new JsonSlurperClassic()
                         def jsonResponse = jsonSlurper.parseText(apiURL)

                         echo "jsonResponse ${jsonResponse}"

                         def coveragePercentage = jsonResponse.component.measures[0].value 
                         def bugs = jsonResponse.component.measures[1].value 
                         def code_smells = jsonResponse.component.measures[2].value

                         echo "code_smells : ${code_smells}"
                         echo "bugs:${bugs}"
                         echo "coveragePercentage${coveragePercentage}"
                         }  
                    }                 
               }
          }
     }
}

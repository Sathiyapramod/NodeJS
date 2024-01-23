import groovy.json.JsonSlurperClassic

pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    echo 'hello world'
                    sh 'sonar-scanner'
                    script {
                         def apiURL = sh(script:"curl -s 'https://sonarcloud.io/api/measures/component?componentKey=sathiyapramod22&metricKeys=bugs,code_smells,coverage'", returnStdout:true).trim()
                          // echo "list of bugs - ${apiURL}"
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

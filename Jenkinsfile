pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    script {
                         def apiURL = sh(script:"curl -s 'https://sonarcloud.io/project/overview?id=sathiyapramod22&metricKeys=coverage'",returnStdout:true).trim()
                         echo "${apiURL}"
                         def parsedJson = evaluate("def json = ${apiURL}; return json")

            def coveragePercentage = parsedJson.component.measures[0].value
            echo "Coverage Percentage: $coveragePercentage%"
                    }
               }
          }
     }
}

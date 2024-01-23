pipeline {
     agent any 
     stages {
          stage('Build'){
               steps {
                    script {
                         def apiURL = sh(script:"curl -s 'https://sonarcloud.io/project/overview?id=sathiyapramod22&metricKeys=coverage'",returnStdout:true).trim()
                         echo "${apiURL}"

     
                         
                      def jsonSlurper = new JsonSlurper()
            def parsedJson = jsonSlurper.parseText(apiURL)

            def coveragePercentage = parsedJson.component.measures[0].value
            echo "Coverage Percentage: $coveragePercentage%"
                    }
               }
          }
     }
}

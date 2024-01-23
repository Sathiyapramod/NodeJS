pipeline {
     agent any 
     stages {
          stage('initial'){
               steps {
                    echo 'Hello World..!'
                    sh 'sonar-scanner'
                    script {
                         def qualityGateStatus = sh(script: 'sonar-scanner -Dsonar.login=YOUR_SONAR_LOGIN_TOKEN -Dsonar.host.url=https://sonarcloud.io -Dsonar.organization=YOUR_SONAR_ORG -Dsonar.projectKey=YOUR_PROJECT_KEY -Dsonar.projectName=YOUR_PROJECT_NAME -Dsonar.sources=. -Dsonar.language=java -Dsonar.exclusions=**/*.txt -Dsonar.showProfiling=true -Dsonar.showProfiling=true | grep -o \'"status":"[^"]\+"\', returnStdout: true).trim()
                         echo "SonarCloud Quality Gate Status: ${qualityGateStatus}"
                    }
               }
          }
     }
}

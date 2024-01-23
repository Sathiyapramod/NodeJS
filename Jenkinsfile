pipeline {
     agent any 
     stages {
          stage('initial'){
               steps {
                    echo 'Hello World..!'
                    // sh 'sonar-scanner'
                    script {
                    def sonarOutput = sh(script: 'sonar-scanner', returnStdout: true).trim()

                    def bugs = sonarOutput =~ /Bugs:[^0-9]*([0-9]+)/
                    def codeSmells = sonarOutput =~ /Code Smells:[^0-9]*([0-9]+)/
                    def vulnerabilities = sonarOutput =~ /Vulnerabilities:[^0-9]*([0-9]+)/

                    echo "Number of Bugs: ${bugs[0][1]}"
                    echo "Number of Code Smells: ${codeSmells[0][1]}"
                    echo "Number of Vulnerabilities: ${vulnerabilities[0][1]}"
                }
               }
          }
     }
}

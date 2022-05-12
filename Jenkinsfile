
pipeline{
    agent any
    stages{
        stage('Build image'){
            steps{
                 sh 'docker build --no-cache -t juangh15/gildedfront /var/lib/jenkins/workspace/frontend/'
            }
        }
        stage('Push image'){
            steps{
                withCredentials([string(credentialsId: 'dockerHubPassword', variable: 'dockerHubPassword')]) {
                sh 'docker login -u juangh15 -p $dockerHubPassword'
                    sh 'docker push juangh15/gildedrose-api'
            }

          
            }
            
        }
    }
    
 }
 
 

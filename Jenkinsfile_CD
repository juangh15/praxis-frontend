pipeline{
    agent any
    stages{
        stage('Stop Containers'){
            steps{
               sh '''
                  docker stop api-container || true
                  docker stop front-container || true
                  docker container prune -f
               '''
            }
        }
        stage('Run Containers'){
            steps{
                withCredentials([string(credentialsId: 'API_IP', variable: 'API_IP')]) {
                    sh '''
                      docker run --name api-container --network backend_net --env POSTGRES_IP=my-postgres --env POSTGRES_PORT=5432 --env POSTGRES_USER=postgres --env POSTGRES_PASSWORD=secret -p 8081:8080 -d juangh15/gildedrose-api
                      docker run --name front-container --network backend_net --env API_IP=$API_IP --env API_PORT=8081 -p 4200:4200 -d juangh15/gildedfront
                    '''
                }
                
            }

          
            }
            
        }
    }
    
 

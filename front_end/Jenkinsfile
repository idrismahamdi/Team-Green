pipeline{
    agent any
    stages{
        stage('Install dependencies'){
            steps{
                sh 'npm install'
            }
        }
    
   
        stage('test appkication'){
            steps{
                sh 'npm test'
            }
        }
    

        stage('Build application'){
            steps{
                sh 'npm build'
            }
        }
    

        stage('Deploy'){
            steps{
                sh 'serve -s build'
            }
        }
    }

    
}
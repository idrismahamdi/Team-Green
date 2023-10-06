pipeline{
    agent any
    stage{
        stage('Install dependencies'){
            steps{
                sh 'npm install'
            }
        }
    }
     stages{
        stage('test appkication'){
            steps{
                sh 'npm test'
            }
        }
    }
     stage{
        stage('Build application'){
            steps{
                sh 'npm build'
            }
        }
    }
     stage{
        stage('Deploy'){
            steps{
                sh 'serve -s build'
            }
        }
    }

    
}
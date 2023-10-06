pipeline{
    agent any
    stages{
        stage('Checkout') {
        steps {
          // Get some code from a GitHub repository
          git branch: 'frontend', url: 'https://github.com/idrismahamdi/Team-Green.git'
        }
        }
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
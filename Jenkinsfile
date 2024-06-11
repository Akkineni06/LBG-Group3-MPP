pipeline {
    agent any
    stages {
        stage('Check') {
            steps {
                bat 'dir'         
            }
        }
        stage('Install') {
            steps {
                bat 'npm install'         
            }
        }
        //    stage('Delete') {
        //        steps {
        //         bat 'pm2 delete all'
        //        }
        //    }
        stage('Build') {
            steps {
                bat 'npm run build'

            }
        }
        stage('Run') {
            steps {
                bat 'pm2 serve ./build 3000 --name project1'

            }
        }
    }
}
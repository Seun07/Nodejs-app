pipeline {
  agent any
  
  tools {nodejs "node"}
  environment {
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
        WS_DEFAULT_REGION = "eu-north-1"
    }
    
  stages {
    stage("GitHub git cloning") {
            steps {
                script {
                    #checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'GITHUB_CREDENTIALS', url: 'https://github.com/clement2019/Deploy-NodeAp-AWS-EKS-jenkins.git']])
                    //git branch: 'main', url: 'https://github.com/Seun07/Nodejs-app.git' 
                }
            }
        }
     
    stage('intialising npm installation.......') {
      steps {
        sh 'npm install'
  
       
      }
    }
  
     stage('Docker image building......') {
            steps {
                script {
                 
                  sh 'printenv'
                  sh 'git version'
                  //sh 'docker build -t seun0706/node-app:""$Build_ID"".'
                  sh 'docker build -t seun0706/node-app7.0 .'
                }
            }
        }


        stage('pushing Docker Image to DockerHub') {
            steps {
                script {
                  
                 withCredentials([string(credentialsId: 'DOCKERID', variable: 'DOCKERID')]) {
                    sh 'docker login -u seun0706 -p ${DOCKERID}'
            }
            //normally
            //sh 'docker push seun0706/node-app:""$Build_ID""'
            sh 'docker push seun0706/node-app7.0:latest'
        }
            }   
        }
         
     
       

  }
}


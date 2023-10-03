pipeline{
    agent any

    stages{
        stage("Clone code"){
            steps{
                echo "Cloning the code"
                git url:"https://github.com/Naul2354/nodejs-todo-app-demo" , branch: "main"
            }

        }
        stage ("Build Docker image"){
            steps{
                echo "Building the image"
                sh "docker build -t todo-app ."
            }
        }
        stage("Push to Docker Hub"){
            steps {
                echo "Pushing the image to docker hub"
                withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
                sh "docker tag todo-app ${env.dockerHubUser}/todo-app:latest"
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                sh "docker push ${env.dockerHubUser}/todo-app:latest"
                }
            }
        }
        stage("Deploy"){
            steps {
                echo "Deploying the container"
            }
        }

    }

    
}
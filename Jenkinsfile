// pipeline {
//     agent any

//     environment {
//         AZURE_CREDENTIALS = credentials('AzureServicePrincipal') // Set up your Azure Service Principal credentials in Jenkins
//         AZURE_WEBAPP_NAME = 'your-web-app-name' // Replace with your Azure Web App name
//         AZURE_RESOURCE_GROUP = 'your-resource-group' // Replace with your Azure resource group name
//         DOCKER_IMAGE_NAME = 'todo-app' // The name of your Docker image
//         DOCKER_IMAGE_TAG = 'latest' // The Docker image tag
//     }

//     stages {
//         stage("Clone code") {
//             steps {
//                 echo "Cloning the code"
//                 git url: "https://github.com/Naul2354/nodejs-todo-app-demo", branch: "main"
//             }
//         }
//         stage("Build Docker image") {
//             steps {
//                 echo "Building the Docker image"
//                 sh "docker build -t $DOCKER_IMAGE_NAME ."
//             }
//         }
//         stage("Push to Azure Container Registry") {
//             steps {
//                 script {
//                     withCredentials([azureServicePrincipal(credentialsId: 'AzureServicePrincipal', tenantId: 'your-tenant-id', clientId: 'your-client-id', subscriptionId: 'your-subscription-id', secret: 'your-secret')]) {
//                         sh "docker login azure -u $AZURE_CREDENTIALS_USERNAME -p $AZURE_CREDENTIALS_PASSWORD"
//                         sh "docker tag $DOCKER_IMAGE_NAME $AZURE_CREDENTIALS_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG"
//                         sh "docker push $AZURE_CREDENTIALS_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG"
//                     }
//                 }
//             }
//         }
//         stage("Deploy to Azure Web App") {
//             steps {
//                 script {
//                     azureWebAppPublish azureCredentialsId: 'AzureServicePrincipal',
//                                       resourceGroup: "$AZURE_RESOURCE_GROUP",
//                                       appName: "$AZURE_WEBAPP_NAME",
//                                       filePath: "**/*.js", // Adjust this path to your Node.js app's entry point
//                                       sourceDirectory: ".",
//                                       slotName: "production", // Optional: deploy to a specific slot
//                                       publishType: 'dockerContainer',
//                                       dockerImageName: "$DOCKER_IMAGE_NAME",
//                                       dockerImageTag: "$DOCKER_IMAGE_TAG",
//                                       enableCustomDeployment: false
//                 }
//             }
//         }
//     }
// }

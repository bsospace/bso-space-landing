pipeline {
    agent any
    environment {
        GIT_URL = 'https://github.com/BSO-Space/bso-space-landing'
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
        DOCKER_IMAGE_TAG = 'latest'
        APP_PORT = '1001'
        STACK_NAME = 'bsospace-landing-page'
        SLACK_CHANNEL = '#jenkins-notifications'
    }
    stages {
        stage('Checkout & Pulling') {
            steps {
                script {
                    sh 'git config --global user.name "bso.jenkins"'
                    sh 'git config --global user.email "bso.jenkins@bsospace.com"'
                    checkout([$class: 'GitSCM', branches: [[name: "main"]], userRemoteConfigs: [[url: "${GIT_URL}"]]])
                    sh "git checkout main"
                    sh "git pull origin main"
                    def lastCommitAuthor = sh(script: "git log -1 --pretty=format:'%an'", returnStdout: true).trim()
                    def lastCommitMessage = sh(script: "git log -1 --pretty=format:'%s'", returnStdout: true).trim()
                    env.LAST_COMMIT_AUTHOR = lastCommitAuthor
                    env.LAST_COMMIT_MESSAGE = lastCommitMessage
                }
            }
            post {
                success {
                    echo "Checkout & Pulling completed successfully."
                }
                failure {
                    error "Checkout & Pulling failed."
                }
            }
        }

        stage('Docker Build & Deploy') {
            when {
                expression {
                    return currentBuild.result == null || currentBuild.result == 'SUCCESS'
                }
            }
            steps {
                script {
                    sh """
                    docker-compose -p ${STACK_NAME} -f ${DOCKER_COMPOSE_FILE} build --no-cache --build-arg DOCKER_IMAGE_TAG=${DOCKER_IMAGE_TAG}
                    docker-compose -p ${STACK_NAME} -f ${DOCKER_COMPOSE_FILE} up -d
                    """
                }
            }
            post {
                success {
                    echo "Docker Build & Deploy completed successfully."
                }
                failure {
                    error "Docker Build & Deploy failed."
                }
            }
        }
    }
    post {
        always {
            script {
                def color = currentBuild.currentResult == 'SUCCESS' ? '#36A64F' : '#FF0000'

                slackSend channel: "${SLACK_CHANNEL}", color: color, message: """
                    *📈 Pipeline Report for ${env.JOB_NAME}* [#${env.BUILD_NUMBER}]
                    *😎 Status*: ${currentBuild.currentResult == 'SUCCESS' ? "✅ *Success*" : "❌ *Failed*"}
                    *🌿 Branch*: ${env.GIT_BRANCH}
                    *💪 Last Commit By*: ${env.LAST_COMMIT_AUTHOR}
                    *📄 Commit Message*: _${env.LAST_COMMIT_MESSAGE}_
                """
            }
        }
    }
}

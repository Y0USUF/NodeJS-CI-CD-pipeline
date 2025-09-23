# NodeJS-CI-CD-pipeline
### **Project: CI/CD Pipeline for a Node.js App**

This repository contains a simple Node.js web application and a complete CI/CD pipeline built with **GitHub Actions**. The objective is to automate the build, test, and deployment of the application to **DockerHub** whenever a change is pushed to the `main` branch.

This project was created as part of the DevOps Internship Task 1, which aims to help understand the full CI/CD automation process

#### **Tools and Technologies**
**GitHub**: Used as the code repository.
**GitHub Actions**: The CI/CD platform that automates the workflow.
**Node.js**: The runtime environment for the sample web application.
**Docker**: Used to containerize the application into an image.
* **DockerHub**: The registry where the Docker image is stored and deployed.

#### **Project Structure**
* **`app.js`**: The main Node.js application file that runs the web server.
* **`package.json`**: Lists the project's dependencies (`express`) and scripts.
* **`Dockerfile`**: Contains instructions for building the Docker image of the application.
* **`.github/workflows/main.yml`**: This YAML file defines the entire CI/CD pipeline, specifying the jobs and steps to be executed on every push to the `main` branch.

#### **CI/CD Workflow**

The pipeline, defined in `main.yml`, consists of a single job that performs the following steps automatically:

1.  **Checkout Code**: The workflow checks out the code from the repository.
2.  **Set up Node.js**: Installs the required Node.js environment.
3.  **Install Dependencies**: Installs the project dependencies listed in `package.json`.
4.  **Docker Login**: Uses secure GitHub Secrets to log in to DockerHub.
5.  **Build Docker Image**: Builds the Docker image based on the `Dockerfile`.
6.  **Push Docker Image**: Pushes the newly built image to the configured DockerHub repository.

#### **How to Run the Project**

To replicate this setup, you need to configure your own GitHub repository with the necessary files and secrets.

1.  **Repository Setup**: Create a new GitHub repository and add the project files (`app.js`, `package.json`, `Dockerfile`).
2.  **GitHub Actions Secrets**: In your repository's settings, add two secrets:
    * `DOCKER_USERNAME`: Your DockerHub username.
    * `DOCKER_TOKEN`: A personal access token from DockerHub with push permissions.
3.  **Trigger the Pipeline**: Push your changes to the `main` branch. The workflow will automatically start, and you can monitor its progress under the **Actions** tab of your repository.

## How to Run
```bash
docker pull yousufuddin/nodejs-ci-cd-pipeline:latest
docker run -p 3000:3000 
<yo<img width="1637" height="922" alt="Screenshot 2025-09-23 163142" src="https://github.com/user-attachments/assets/997f4472-6692-4c58-81c1-634061589d78" />
ur-dockerhub-username>/nodejs-demo-app


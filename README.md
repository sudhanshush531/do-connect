# DoConnect

## Overview

DoConnect is designed to provide a collaborative space for coders to seek answers to their programming questions. It offers a user-friendly interface that allows users to register, post questions, and receive answers from a community of fellow developers. To maintain quality and accuracy, the platform incorporates an approval system, ensuring that answers are reviewed and approved by an admin before being published.

## Features

- **User Registration**: Users can create accounts to access the platform.

- **Ask Questions**: Registered users can post programming questions on the platform.

- **Answer Questions**: Other users can provide answers in a comment-like format to help solve the posted questions.

- **Admin Approval**: Answers submitted by users are subject to admin approval before being displayed publicly to ensure accuracy and relevance.

## Tech Stack

The Code Doubt Clearing Platform is built using the following technologies:

- **Frontend**: Angular
  - Angular provides a dynamic and responsive user interface for the platform, offering an interactive experience for users.

- **Backend**: Java with Spring Boot
  - Spring Boot serves as the backend framework, handling user authentication, question and answer management, and communication with the database.

- **Database**: MySQL
  - MySQL is used to store user account information, questions, answers, and related data.

## Getting Started

To get started with the Code Doubt Clearing Platform, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Set Up the Backend**:
   - Configure your MySQL database connection in the Spring Boot application properties.
   - Build and run the Spring Boot backend.

3. **Set Up the Frontend**:
   - Navigate to the "frontend" folder.
   - Install Angular CLI (if not already installed):
     ```bash
     npm install -g @angular/cli
     ```
   - Install project dependencies:
     ```bash
     npm install
     ```
   - Start the Angular development server:
     ```bash
     ng serve
     ```

4. **Access the Platform**:
   - Open your web browser and navigate to `http://localhost:4200` to access the platform.

## Usage

1. **Register**:
   - Create an account on the platform to access all features.

2. **Post Questions**:
   - After registration, you can post your programming questions.

3. **Answer Questions**:
   - Browse and answer questions posted by other users.

4. **Admin Approval**:
   - Admins will review and approve answers to maintain quality content.

## Acknowledgments

- Special thanks to the open-source community for their contributions and support.

Feel free to customize this README file to include specific details about your project, licensing information, and acknowledgments.

# Email-Sender-Using-AI-Response

This guide provides step-by-step instructions on how to set up and run the Email-Sender-Using-AI-Response in your machine. This app lets you, send emails at a particular time with AI generated Response.

## Pre-requisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v18 or higher) -- for backend
- MongoDB (local instance or access to a remote server provided by atlas etc.) -- g
- Edgechains

## Getting Started

### 1. Clone the Repository

Clone the repository from GitHub to your local machine using the following command:

```shell
https://github.com/chuphal/edgechains_sample.git
```

Use two terminals.

Navigate into the project directory:

```shell
cd email-sender
```

```shell
cd email-scheduler-api
```

### 2. Configure Environment Variables

Create a .env file inside email-scheduler-api folder of the project and configure the necessary environment variables. Use the provided .env.example file as a template:

```text
# Server port
PORT=5000
JWT_SECRET= your_secret
MONGO_URI=your_mongo_uri
SERVICE_EMAIL=yours
CLIENT_ID=yours
CLIENT_SECRET=yours
REDIRECT_URI=yours
REFRESH_TOKEN=yours
ACCESS_TOKEN=yours

```

#### a. Generating CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, ACCESS_TOKEN:

[https://www.youtube.com/watch?v=i4HZg2TufcM&ab_channel=BackCoding]

### 3. Install Dependencies and build the app

Install the required dependencies for both the folders using npm:

```shell
npm install
```

### 4. Start the Server

Start the server using the following command:

Go to email-scheduler-api :-

```shell
npm run server

```

Go to email-sender :-

```shell
npm run start

```

### 5. Verify the Setup

Open your browser and navigate to.

```shell
http://localhost:3000/?position=%22backend%20developer%22&to=%22cchuphal4@gmail.com%22&delay=%225%20seconds%22#
```

Got to the provided email and recieve the email.

You can delay according to your time.ex. hours, minutes, days.

### Scripts

- "npm run start" - Start the server for email-sender ie. arakoo server
- "npm run server" - start the server for email-scheduler-api.

### Video link

```script
https://www.loom.com/share/88a391df637c4e158184c7bf5f86a8d2?sid=dcd5f29f-fb6b-47ac-b768-c9d174423ae3
```

## Contact

Email: - [cchuphal4@gmail.com]

# Thank you !!

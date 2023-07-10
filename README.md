# Mindware Shop

Welcome to the Mindware Shop! This repository contains the source code for our electronic goods e-commerce website. We specialize in selling smartwatches and jewelry items. The application is built using React (port 3001) for the frontend and Rails (port 3000) for the backend.

## Getting Started

To run the Mindware Shop application locally on your machine, please follow the steps below:

### Prerequisites

Before starting, make sure you have the following software installed:

- Node.js (https://nodejs.org)
- Ruby (https://www.ruby-lang.org)
- Rails (https://rubyonrails.org)

### Installation

1. Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/patrickwide/MindwareAI.git
```

2. Navigate to the project directory:

```bash
cd MindwareAI
```

3. Install the dependencies for the frontend:

```bash
cd frontend
npm install
```

4. Install the dependencies for the backend:

```bash
cd ../backend
bundle install
```

### Configuration

1. Create a `.env` file in the `backend` directory and add the following environment variables:

```bash
DATABASE_URL=<your-database-url>
```

Replace `<your-database-url>` with the connection URL for your PostgreSQL database.

2. Configure the database by running the following command in the `backend` directory:

```bash
rails db:create db:migrate
```

### Running the Application

1. In one terminal window, navigate to the `frontend` directory and start the React development server:

```bash
cd frontend
npm start
```

The frontend server will start on `http://localhost:3001`.

2. In another terminal window, navigate to the `backend` directory and start the Rails server:

```bash
cd backend
rails s
```

The backend server will start on `http://localhost:3000`.

### Accessing the Application

You can now access the Mindware Shop application by opening your web browser and visiting `http://localhost:3001`.



Thank you for choosing Mindware Shop! We hope you enjoy your shopping experience.

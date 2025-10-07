💬 Chat App

The Chat App is a modern, real-time messaging application that allows users to communicate instantly in a secure and interactive environment. Built with the MERN stack and Socket.io, it supports both one-to-one and group chats, offering a smooth and responsive chatting experience.

⚙️ Features
💬 Real-time messaging with WebSockets
👤 User authentication (login/register using JWT)
👥 One-to-one and group chat support
🕒 Message timestamps and delivery indicators
📱 Responsive and modern UI built with React and Tailwind CSS
🔒 Secure communication using JWT-based authentication
🧑‍🤝‍🧑 Online/offline user status tracking
🛠️ Tech Stack

Frontend: React.js, Tailwind CSS, Socket.io-client
Backend: Node.js, Express.js, Socket.io
Database: MongoDB (Mongoose ORM)
Authentication: JWT (JSON Web Token)

🚀 Installation Guide

Follow these steps to run the Chat App locally:

1. Clone the repository
git clone https://github.com/Abdullahsaif77/Chat_App.git

2. Navigate into the project
cd Chat_App

3. Install dependencies

Install server dependencies:

cd backend
npm install


Install frontend dependencies:

cd ../frontend
npm install

4. Create environment variables

In the backend folder, create a .env file and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

5. Start the servers

Run backend:

cd backend
npm start


Run frontend:

cd ../frontend
npm start

6. Open in browser

Go to:

http://localhost:3000


You can now start chatting in real-time 🎉

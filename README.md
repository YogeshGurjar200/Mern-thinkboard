# MERN Thinkboard

**Live Demo:** [https://mern-thinkboard-einc.onrender.com/](https://mern-thinkboard-einc.onrender.com/)

A collaborative note-taking and task management app built using the **MERN stack** (MongoDB, Express, React, Node.js) with real-time updates and responsive UI.

---

## 📌 Features

- **User Authentication** – Sign up, log in, and manage sessions securely.
- **Create, Read, Update, Delete Notes** – Manage notes with ease.
- **Responsive UI** – Built with Tailwind CSS for mobile-first design.
- **Rate Limiting** – Prevents abuse of API endpoints.
- **Timestamps** – Automatic `createdAt` and `updatedAt` fields in MongoDB.
- **API Integration** – Frontend communicates with backend via REST API.
- **Environment Configurations** – `.env` support for secrets and database URLs.

---

## 🛠 Tech Stack

**Frontend**

- React.js (Functional Components + Hooks)
- Tailwind CSS
- Axios (API calls)

**Backend**

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv (environment variables)
- Rate limiting middleware

## ⚙️ Installation & Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/YogeshGurjar200/Mern-thinkboard.git
cd Mern-thinkboard

---

## 📂 Project Structure

## backend installation

cd backend
npm install

## Create .env file inside backend:

env
Copy
Edit
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Run backend server:

npm run dev

3️⃣ Frontend Setup

bash
Copy
Edit
cd ../frontend
npm install
npm run dev


```

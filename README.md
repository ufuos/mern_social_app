📄 README for mern_social_app

# mern_social_app

A full-stack **social networking web application** built with the **MERN stack (MongoDB, Express.js, React, Node.js)** and enhanced with **AI-powered features via ChatGPT**.  
This app allows users to connect, share posts, interact with others, and explore an intelligent social feed.

---

## 🚀 Features

- 🔐 **Authentication & Authorization** – Secure login and registration using JWT & bcrypt.
- 👤 **User Profiles** – Customizable profile pages with bio, avatar, and personal details.
- 📝 **Posts & Feeds** – Create, edit, delete, and like posts in a dynamic feed.
- 💬 **Comments & Engagement** – Comment on posts and engage with others in real time.
- 📷 **Media Uploads** – Upload and display images via Cloudinary integration.
- 🤖 **AI-Powered Assistance** – ChatGPT integrated for smart replies, post suggestions, and content enhancement.
- 🔔 **Notifications** – Stay updated on likes, comments, and new followers.
- 📱 **Responsive Design** – Built with **Material UI** for a clean, modern look.

---

## 🛠️ Tech Stack

### Frontend

- React (with hooks & context)
- Tailwind css
- Axios

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- Cloudinary for image uploads

### AI Integration

- OpenAI API (ChatGPT) for smart features

---

## 📂 Project Structure

mern_social_app/
├── backend/ # Express + Node.js API
│ ├── controllers/ # Business logic
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API routes
│ └── server.js
│
├── frontend/ # React app
│ ├── src/
│ │ ├── api/ # Axios API calls
│ │ ├── auth/ # Auth context & hooks
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Page-level components
│ │ ├── App.js
│ │ └── index.js
│ └── public/
│
└── README.md

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/ufuos/mern_social_app.git
cd mern_social_app

2. Install dependencies

For backend:

cd backend
npm install


For frontend:

cd frontend
npm install

3. Setup environment variables

Create .env files in both backend and frontend as needed:

Backend (backend/.env)

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret
CLOUDINARY_URL=your-cloudinary-url
OPENAI_API_KEY=your-openai-key


Frontend (frontend/.env)

REACT_APP_API_URL=http://localhost:5000

4. Run the app

In separate terminals:

# Start backend
cd backend
npm run dev

# Start frontend
cd frontend
npm start

🤝 Contributing

Pull requests are welcome! Please fork the repo and submit a PR.

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Built by Ufuoma Ogedegbe
.


---

# 🔗 LinkedIn / Portfolio Description (Short)

> **mern_social_app** – A full-stack social networking platform built with the **MERN stack** and **ChatGPT integration**. Features include authentication, user profiles, posts, comments, media uploads, and AI-powered content suggestions. Designed with **Tailwind css** for a modern, responsive experience.
```

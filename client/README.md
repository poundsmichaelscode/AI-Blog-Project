
🧠 AI Blog Platform

An intelligent, full-stack blog platform powered by **Gemini AI**, built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) and styled using **Tailwind CSS**. This platform allows users to generate blog content with the help of AI, manage their posts, and explore AI-generated articles in an interactive, responsive environment.

> 🌐 [Live Demo](https://vercel.com/olayenikan-michael-s-projects/ai-blog-project/JBXM6f3Ky3w9kdSXbLaodJFD79XE)



## 🚀 Features

- 🔮 **AI Content Generation** – Generate article drafts using Gemini AI.
- 📝 **Create, Read, Update, Delete (CRUD)** blog posts.
- 🔍 **Search and filter** through blog entries.
- 💡 **Real-time AI suggestions** for titles, tags, or summaries.
- 📱 **Responsive design** with Tailwind CSS.
- 🔐 **User authentication** (if enabled).
- 📦 RESTful backend with Express and MongoDB.



 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios
- React Router

Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Gemini AI API (Google AI)

Other:
- Vercel (Deployment)
- dotenv (for environment variables)



## 📁 Project Structure

ai-blog-project/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components (Home, Create, Post, etc.)
│   │   └── App.jsx
│   └── tailwind.config.js
├── server/                 # Express backend
│   ├── routes/             # API routes
│   ├── controllers/        # Request handlers
│   ├── models/             # Mongoose schemas
│   ├── gemini/             # Gemini AI service logic
│   └── server.js
├── .env
├── README.md
└── package.json


## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-blog-project.git
cd ai-blog-project
```

### 2. Setup Environment Variables

Create a `.env` file in the `server/` directory with the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

### 3. Install Dependencies

**Backend:**

```bash
cd server
npm install
```

**Frontend:**

```bash
cd ../client
npm install
```

### 4. Run the Project

**Backend:**

```bash
cd server
npm run dev
```

**Frontend:**

```bash
cd ../client
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🤖 AI Integration

This project integrates **Gemini AI** for:

* Blog draft generation
* Title and tag suggestions
* Summarizing articles

Gemini prompts are configured on the server side under `/gemini/aiController.js`.

---

## 📸 Screenshots

![Home Page](./screenshots/home.png)
![Editor Page](./screenshots/editor.png)

> *(Replace with actual screenshots for better clarity.)*

---

## ✅ To-Do / Improvements

* [ ] Add user authentication (JWT + Role-based)
* [ ] Add AI-assisted image generation
* [ ] Allow Markdown formatting for blog posts
* [ ] Improve SEO with meta tags
* [ ] Add comment system

---

## 🧑‍💻 Author

**Olayenikan Michael**
Frontend Developer | AI Enthusiast
📧 \[[YourEmail@example.com](mailto:YourEmail@example.com)]
🔗 [Portfolio](https://your-portfolio-link.com)
🔗 [LinkedIn](https://linkedin.com/in/your-profile)

---

## 📄 License

This project is licensed under the MIT License.


## 💬 Feedback

If you find any bugs or have suggestions, feel free to open an issue or contact me.


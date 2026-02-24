# 🚀 MERN Auth Bridge: Secure Authentication Portal

A high-fidelity, full-stack authentication system featuring a polished **React** frontend and a robust **Node.js/Express** backend. This project demonstrates seamless cloud database integration using **MongoDB Atlas** and **Mongoose**, prioritizing security through environment variables and CORS-enabled API communication.

## Key Features

### 💻 Frontend (React)

* **High-Fidelity UI**: Professional, responsive design with smooth transitions between Login and Sign-up modes.
* **Real-time Feedback**: Custom-styled modal notification system for successful database operations.
* **State Management**: Dynamic form handling and validation for user inputs.

### ⚙️ Backend (Node.js & Express)

* **RESTful API**: Secure endpoints for user registration and data persistence.
* **MongoDB Atlas Integration**: Cloud-based storage utilizing Mongoose Schemas for structured data.
* **Security First**: Implementation of `dotenv` for credential protection and `cors` for cross-origin security.

---

## 🛠 Tech Stack & Documentation

This project is built using the industry-standard MERN stack. Explore the official documentation below:

| Technology | Purpose | Documentation Link |
| --- | --- | --- |
| **Node.js** | Runtime Environment | [nodejs.org](https://nodejs.org/) |
| **Express.js** | Backend Framework | [expressjs.com](https://expressjs.com/) |
| **MongoDB Atlas** | Cloud Database | [mongodb.com/atlas](https://www.mongodb.com/atlas) |
| **Mongoose** | MongoDB Object Modeling | [mongoosejs.com](https://mongoosejs.com/docs/) |
| **React** | Frontend Library | [react.dev](https://react.dev/) |

---

## 🚀 Getting Started

### 1. Database Setup (MongoDB Atlas)

1. **Register**: Create a free account at [MongoDB Cloud Atlas](https://www.mongodb.com/cloud/atlas/register).
2. **Deploy Cluster**: Follow the [Cluster Creation Tutorial](https://www.mongodb.com/docs/atlas/tutorial/create-new-cluster/) to set up your shared tier.
3. **Get Connection String**: Copy your connection URI from the "Connect" tab in your Atlas dashboard.

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/amna-mohsin/mern-auth-bridge.git
cd mern-auth-bridge

# Install Backend dependencies
cd backend
npm install

# Install Frontend dependencies
cd ../frontend
npm install

```

### 3. Environment Configuration

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string

```

### 4. Running the Application

```bash
# Start Backend (from backend folder)
node server.js

# Start Frontend (from frontend folder)
npm run dev

```

---

##  API Endpoints

### User Registration

* **URL**: `http://localhost:5000/api/register`
* **Method**: `POST`
* **Body**:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}

```


* **Success Response**: `201 Created` with a success modal trigger.

---

## Security & Best Practices

* **Gitignore**: The `.env` and `node_modules` are strictly excluded from version control to prevent credential leaks.
* **Drivers**: Utilizes the latest [Node.js MongoDB Driver](https://www.mongodb.com/docs/drivers/node/current/) for optimal performance.

---

## Owner

* Developed by **Amna Mohsin**
* Connect on [LinkedIn](https://www.linkedin.com/in/amna-m98/)

---

## License

This project is open-source and free to use for educational purposes.

# 🚀 DashFlow

**DashFlow** is a modern, responsive user dashboard built with **React** and **Vite**, featuring global state management using Context API, robust error handling, and a mobile-first layout.

This project demonstrates **real-world frontend architecture**, clean UI design, and best practices expected in production applications.

---

## ✨ Features

* 🔐 **Global User State**

  * User data fetched once using Context API
  * Shared across all pages (Home, Dashboard, Settings)

* 📱 **Fully Responsive UI**

  * Mobile-first design
  * Adaptive layouts for small screens
  * Scroll-friendly behavior on mobile

* ⚠️ **Error Handling**

  * Global error handling using `react-error-boundary`
  * Graceful fallback UI when API fails
  * Retry support

* ⚡ **Fast Development Setup**

  * Built with Vite for instant HMR
  * Clean folder structure

* 🎨 **Modern UI**

  * Design tokens (CSS variables)
  * Card-based layout
  * Smooth hover effects and animations

---

## 🛠 Tech Stack

* **React**
* **Vite**
* **React Router DOM**
* **Context API**
* **react-error-boundary**
* **CSS (Modern Flexbox & Grid)**

---

## 📁 Project Structure

```
src/
├── api/
│   └── user.js
├── context/
│   └── UserContext.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── DashboardPage.jsx
│   └── SettingsPage.jsx
├── components/
│   └── ErrorFallback.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/dashflow.git
cd dashflow
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🧪 Error Handling (How It Works)

* API errors are captured in `UserContext`
* Errors are re-thrown during render
* `react-error-boundary` catches them globally
* A friendly fallback UI is displayed with a retry option

This mimics real-world production error handling.

---

## 📱 Responsive Design Strategy

* `max-width + width: 100%` containers
* CSS Grid for stats cards with breakpoints
* Dynamic viewport units (`dvh`) for mobile
* Layout switches from centered → scrollable on small screens

---

## 🧠 Key Learnings from This Project

* How to avoid multiple API calls using Context
* Proper global error handling in React (Vite)
* Responsive layouts without layout hacks
* Clean separation of layout, logic, and UI
* Scalable CSS using design tokens

---

## 🔮 Future Improvements

* Authentication & protected routes
* Dark mode support
* Skeleton loaders
* Persist user data with localStorage
* API integration with a real backend

---

## 👤 Author

**Samir Jadhav**
Frontend Developer

* Portfolio: [https://samirjadhav.vercel.app](https://samirjadhav.vercel.app)
* GitHub: [https://github.com/your-username](https://github.com/your-username)
* LinkedIn: [https://linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## ⭐ Final Note

This project is designed to reflect **real-world frontend development standards** and is suitable for:

* Portfolio showcase
* Frontend interviews
* Learning React architecture
* UI/UX practice

---

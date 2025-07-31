# 💼 Job Listing App

A simple React + TypeScript web application that displays job opportunities fetched from a live API. Users can browse job listings and view detailed job information on a separate page.

---

## 🚀 Features

- Fetches and displays job postings from a public API.
- Lists all jobs with title, company, location, and description.
- Dynamic job detail page using React Router.
- Tailwind CSS for responsive UI.
- Error handling for missing job data.

---

## 🔗 Live API Used

https://akil-backend.onrender.com/opportunities/search

---

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **React Router DOM**
- **Tailwind CSS**
- **Lucide React** (icons)

---

## 📁 Project Structure

src/
├── components/
│ ├── JobCard.tsx // Renders list of job cards
│ └── JobDashboard.tsx // Shows job detail by ID
├── types/
│ └── job.ts // Job data interface
├── data/
│ └── jobs.json // (Old dummy data - now unused)
├── App.tsx // App routing and data fetching
└── main.tsx // Entry point
# mokSa.ai Dashboard

A full-stack dashboard for monitoring customer traffic in and out of stores, using Kafka, Node.js (Express), and Next.js (React, TypeScript).

## Project Structure

```
mokSa.ai/
│
├── backend/      # Node.js, Express, Kafka consumer, REST API
└── frontend/
    └── my-dashboard/   # Next.js (React, TypeScript) frontend
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) (for running Kafka and Zookeeper)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## 1. Start Kafka and Zookeeper

Navigate to the `backend` directory and run:

```sh
cd backend
docker-compose up -d
```

This will start Kafka and Zookeeper containers.

---

## 2. Start the Backend Server

In a new terminal:

```sh
cd backend
npm install
npm run dev
```

- The backend will start on [http://localhost:5000](http://localhost:5000)
- REST API endpoints:
  - `GET /api/live`
  - `GET /api/history`

---

## 3. Start the Frontend (Next.js)

In another terminal:

```sh
cd frontend/my-dashboard
npm install
npm run dev
```

- The frontend will start on [http://localhost:3000](http://localhost:3000)

---

## 4. Usage

- **Live Table:** Shows real-time customer in/out data per store.
- **History Table:** Shows hourly aggregates for the last 24 hours.

---

## Notes

- Make sure Kafka and backend are running before starting the frontend.
- If running frontend and backend on different hosts/ports, update API URLs in the frontend accordingly.
- For production, build both frontend and backend and use a process manager or containerization as needed.

---

## Troubleshooting

- If you get 404 errors from the frontend, ensure the backend is running and accessible.
- If Kafka is not reachable, check Docker containers and ports.

---

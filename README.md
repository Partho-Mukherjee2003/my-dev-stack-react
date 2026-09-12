🚀 Dev Stack Builder

Pick one technology per category and build your ideal development stack — a clean, interactive React + TypeScript app for exploring frontend, backend, database, and DevOps tools.

<p align="center"> <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React"/> <img src="https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white" alt="TypeScript"/> <img src="https://img.shields.io/badge/Vite-purple?logo=vite&logoColor=white" alt="Vite"/> <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white" alt="TailwindCSS"/> </p> <p align="center"> 🔗 <a href="https://taupe-phoenix-54a64a.netlify.app/"><strong>Live Demo</strong></a> &nbsp;|&nbsp; 💻 <a href="https://github.com/Partho-Mukherjee2003/my-dev-stack-react"><strong>Source Code</strong></a> </p>
📖 Overview

Dev Stack Builder is a single-page React application where users can browse a curated list of technologies (Frontend, Backend, Database, DevOps, etc.), add the ones they like to a personal "stack," and manage that selection in real time — with instant visual feedback, toast notifications, and a fully responsive UI.

Think of it as a fun way to visualize "What would my ideal tech stack look like?"

✨ Features
🗂️ Browse Technologies — View a grid of tech cards, each showing an icon, name, category, difficulty level, and rating.
➕ Add to Stack — Add any technology to your personal stack with a single click. The button instantly disables once added.
❌ Remove Individual Items — Remove a single technology from your stack at any time — its "Add" button automatically re-enables.
🧹 Remove All — Clear your entire stack in one click.
🔔 Toast Notifications — Get instant feedback (success/error toasts) for every add/remove action.
⚡ Async Data Loading — Technology data is fetched asynchronously and rendered using React's use() hook with Suspense, complete with a loading state.
📱 Fully Responsive — Optimized layouts for mobile, tablet, and desktop using Tailwind CSS.
🎯 Type-Safe — Built entirely in TypeScript with strict typing across components and props.
🛠️ Tech Stack
Category	Technology
Library	React (with use() hook + Suspense)
Language	TypeScript
Bundler	Vite
Styling	Tailwind CSS
Notifications	react-toastify
Icons	lucide-react
Linting	Oxlint
📁 Project Structure
my-dev-stack-react/
├── public/
│   └── data.json               # Technology data (name, icon, category, etc.)
├── src/
│   ├── Components/
│   │   ├── Nav.tsx              # Top navigation bar
│   │   ├── Banner.tsx           # Hero/banner section
│   │   ├── StackCards.tsx       # Fetches data & renders the tech grid + sidebar
│   │   ├── StackCard.tsx        # Individual technology card (Add to Stack button)
│   │   ├── SelectedStack.tsx    # Sidebar showing all selected technologies
│   │   ├── SelectedStackCard.tsx# Individual selected item (with remove button)
│   │   └── Footer.tsx           # Footer section
│   ├── Types/
│   │   └── StackCards.ts        # Shared TypeScript types/interfaces
│   └── App.tsx                  # Root component — data fetching & layout
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
⚙️ How It Works
Data Fetching — App.tsx fetches technology data once (via useState initializer) and passes the resulting Promise down to StackCards.
Suspense + use() — StackCards unwraps that promise using React's use() hook, while Suspense shows a loading spinner until the data resolves.
Single Source of Truth — The selectedStack array lives in StackCards (the common parent) and is passed down to both the technology grid (StackCard) and the sidebar (SelectedStack).
Derived State — Instead of tracking each card's "active" status separately, every StackCard checks whether its own id exists inside selectedStack:
ts
   const isActive = selectedStack.some((item) => item.id === stackCard.id);

This keeps the UI automatically in sync — removing an item instantly re-enables its corresponding "Add to Stack" button. 5. Add / Remove Flow:

Add → appends the technology to selectedStack and shows a success toast.
Remove one → filters that item out of selectedStack by id.
Remove all → resets selectedStack to an empty array.
🚀 Getting Started
Prerequisites
Node.js (v18+ recommended)
npm / yarn / pnpm
Installation
bash
# 1. Clone the repository
git clone https://github.com/Partho-Mukherjee2003/my-dev-stack-react.git

# 2. Navigate into the project
cd my-dev-stack-react

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

The app will be running at http://localhost:5173 🎉

Build for Production
bash
npm run build
🌐 Live Demo

👉 View the live app here

🗺️ Roadmap / Ideas for the Future
 Filter technologies by category
 Persist selected stack in local storage
 Search bar for technologies
 Export selected stack as an image or shareable link
🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or open a pull request.

📄 License

This project is open source and available under the MIT License.

👤 Author

Partho Mukherjee 🔗 GitHub

<p align="center">Made with ❤️ using React & TypeScript</p>

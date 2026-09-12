🚀 Dev Stack Builder
<p align="center"> <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React"/> <img src="https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white" alt="TypeScript"/> <img src="https://img.shields.io/badge/Vite-purple?logo=vite&logoColor=white" alt="Vite"/> <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white" alt="TailwindCSS"/> </p> <p align="center"> 🔗 <a href="https://taupe-phoenix-54a64a.netlify.app/"><strong>Live Demo</strong></a> &nbsp;|&nbsp; 💻 <a href="https://github.com/Partho-Mukherjee2003/my-dev-stack-react"><strong>Source Code</strong></a> </p>
📖 Description

Dev Stack Builder is a simple and interactive web app where users can explore a list of popular technologies (frontend, backend, database, etc.) and build their own "ideal tech stack" by picking one at a time. Every technology is shown as a card with its icon, category, difficulty, and rating — and users can add or remove items from their personal stack with instant visual feedback.

🛠️ Technologies Used
React – for building the UI with components
TypeScript – for type safety across props and state
Vite – as the build tool / dev server
Tailwind CSS – for styling and responsive design
react-toastify – for showing success/error notifications
lucide-react – for icons (like the remove "X" icon)
✨ Features
Add to Stack – Click "Add to Stack" on any technology card to add it to your personal stack. The button automatically disables once added, so you can't add the same item twice.
Remove Individual or All Items – Remove a single technology from your stack, or clear the entire stack at once with the "Remove All" button — the corresponding "Add" button re-enables instantly.
Real-time Feedback – Every add/remove action triggers a toast notification, and the stack counter (e.g. "2 Technology Selected") updates live as you make changes.
❓ React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It's used in React because it makes it much easier to describe what the UI should look like — instead of writing separate createElement() calls, we can just write tags like <div> or <h1> directly in our JS/TS files, and React converts it into actual DOM elements behind the scenes.

2. What is the difference between props and state?

Props are data passed into a component from its parent — they are read-only, meaning the component receiving them cannot change them itself. State is data that a component manages internally, and it can change over time (using useState), which causes the component to re-render. In short: props come from outside, state lives inside.

3. What does the useState hook do, and where did you use it in this project?

useState lets a component remember a value between renders and update it, and whenever that value changes, React re-renders the component to reflect it. In this project, I used useState to keep track of selectedStack — the array of technologies the user has added — inside the StackCards component. This state is then shared with StackCard (to add items) and SelectedStack (to display and remove items).

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect lets us run some code as a "side effect" after a component renders — for example, fetching data — and it can run again when certain values change. It's useful for loading data because fetching is asynchronous, and we don't want to fetch on every render, only once when the component mounts. In this project, I actually fetched the technology data (data.json) once using a useState initializer combined with React's newer use() hook and Suspense. This serves the same purpose as useEffect here — running the fetch once and showing a loading state until the data resolves — but is a more modern approach for handling promises directly inside components.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify which items have changed, been added, or been removed when a list re-renders. Without a unique key, React can't efficiently tell items apart, which can cause bugs like wrong data showing on the wrong item, or unnecessary re-rendering of the whole list instead of just the changed item. In this project, I used stackCard.id as the key when mapping over the technology list.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on some condition — usually done with a ternary (? :) or && operator. I used it in the SelectedStack component to show either an empty-state message or the actual list of selected items:

tsx
{selectedStack.length === 0 ? (
  <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 py-10 px-6">
    <h1 className="text-sm text-gray-400">Your stack is empty.</h1>
  </div>
) : (
  <h1>({selectedStack.length}) Stack selected.</h1>
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props — for example, <StackCard stackCard={stackCard} /> sends the stackCard object down. To send something back up to the parent, the parent passes a function as a prop (since children can't directly modify the parent's state), and the child calls that function — usually with some data like an id. For example, I passed a handleRemove function down from StackCards/SelectedStack to SelectedStackCard, and when the user clicks the "X" button, the child calls that function with the item's id, which updates the parent's selectedStack state and causes everything to re-render correctly.

<p align="center">Made with ❤️ using React & TypeScript</p>

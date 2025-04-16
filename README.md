# 🚀 Redux Toolkit Counter App

Welcome to the **Redux Toolkit Counter App**! This project is a fun and interactive **Counter Application** built with **React**, **TypeScript**, and **Redux Toolkit**, powered by the blazing-fast **Vite** build tool. It showcases modern state management techniques and a clean, scalable structure for React applications.

---

## ✨ Features

- **🔧 State Management**: Simplified with Redux Toolkit slices and async thunks.
- **⏳ Asynchronous Actions**: Fetch data from an API using `createAsyncThunk`.
- **🔒 TypeScript Integration**: Enjoy type safety throughout the app.
- **⚛️ React-Redux Hooks**: Seamless state access and dispatching with `react-redux`.
- **⚡ Vite**: Lightning-fast development with hot module replacement (HMR).

---

## 📝 Application Overview

The Counter App empowers users to:

1. **Increment** the counter.
2. **Decrement** the counter.
3. **Fetch** the counter value asynchronously from an API.

---

## 📂 Project Structure

```
src/
├── App.tsx            # Main application component
├── Counter.tsx        # Counter component with Redux integration
├── redux/
│   ├── store.ts       # Redux store configuration
│   ├── counterSlice.ts # Counter slice with reducers and extra reducers
│   ├── asyncActions.ts # Asynchronous actions using createAsyncThunk
├── index.css          # Global styles
├── main.tsx           # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/your-username/redux-toolkit-counter.git
  cd redux-toolkit-counter
  ```

2. Install dependencies:
  ```bash
  npm install
  ```

3. Start the development server:
  ```bash
  npm run dev
  ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

---

## 🛠️ Usage Examples

### Increment and Decrement the Counter

The Counter component provides buttons to increment and decrement the counter value. State management is handled using Redux Toolkit.

```tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { increment, decrement } from './redux/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
   <div>
    <h1>Count: {count}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
   </div>
  );
};
```

### Fetch Counter Value Asynchronously

The app demonstrates fetching data from an API using `createAsyncThunk`.

```tsx
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCounter = createAsyncThunk(
  'counter/fetchCounter',
  async () => {
   const response = await fetch('https://api.example.com/counter');
   const data = await response.json();
   return data.count;
  }
);
```

---

## 💡 Concepts Demonstrated

- **Redux Toolkit Slices**: Manage state with reducers and actions.
- **Async Thunks**: Handle API calls and integrate with Redux state.
- **React-Redux Hooks**: Use `useSelector` and `useDispatch` for state interaction.

---

## 🛠️ Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run lint`: Check for code quality issues with ESLint.
- `npm run preview`: Preview the production build.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

Feel free to fork this repository, experiment, and make it your own! 🎉

## 🙌 Contributing

Contributions are welcome! If you have any questions, suggestions, or improvements, feel free to reach out or create a pull request. You can find me on GitHub as [Dub5991](https://github.com/Dub5991). Happy coding! 🚀

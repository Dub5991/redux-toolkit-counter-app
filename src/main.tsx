// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './redux/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

// 🔨 Code Breakdown 🔨
// This code is the main entry point for a React application that uses Redux for state management. It sets up the root of the React app and connects the Redux store to the entire component tree through the Provider component.

// Importing Statements
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// Provider from react-redux is imported to connect the Redux store to the React component tree.
// store is imported from store.ts, where the Redux store was created and configured.
// Rendering the App with Redux Store Connection
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>,
// )
// <Provider store={store}>: The Provider component from react-redux is wrapped around the <App /> component. The Provider takes the Redux store as a prop and makes it available to all components in the app. Any component within <App /> can access the Redux state and dispatch actions via hooks like useSelector and useDispatch or connect.



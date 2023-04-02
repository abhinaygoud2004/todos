import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoListProvider from './contexts/TodoListProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<TodoListProvider>
<App />
</TodoListProvider>
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

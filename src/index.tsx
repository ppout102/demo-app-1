
import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { exportToExternal } from 'ext-loader';
let container = document.getElementById('app1Root');
if(container)
ReactDOM.render(
  <App1>
    <AddTodo prefix="load_from_app1_"/>
    <TodoList />
  </App1>,
  container
);

exportToExternal('app1', ReactDOM.render, App1,
  {
    'AddTodo': AddTodo,
    'TodoList': TodoList
  });

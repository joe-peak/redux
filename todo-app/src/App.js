import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddTodo from './components/AddTodo';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from './actionType';
import {addTodo, toggleTodo, setVisibilityFilter} from './actions';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {
    render() {
        // Injected by connect() call:
        const { dispatch, visibleTodos, visibleFilter } = this.props;
        return (<div>
            <AddTodo clickAdd = {text => { dispatch(addTodo(text)) }}/>
            <ToDoList todolist = {visibleTodos} onTodoClick = {index => dispatch(toggleTodo(index))}/>
            <Footer filter = {visibleFilter} onClickFilter = {filter => {dispatch(setVisibilityFilter(filter))}}/>
        </div>)
    }
}

function selectTodos(todos, filter) {
    console.log(todos);
    console.log(filter);
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.complete)
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.complete)
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todo, state.visibleFilter),
    visibleFilter: state.visibleFilter
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);

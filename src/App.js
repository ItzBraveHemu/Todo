// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import { Todos } from './Component/Todos';
import { Footer } from './Component/Footer';
import { About } from './Component/About';
import AddTodo from './Component/AddTodo';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];

  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("well done You deleted!", todo);
    // deleting this way in react doesnot work 
    // let index=todos.indexOf(todo);
    // todos.splice(index,1)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const addTodo = (title, desc) => {
    console.log("i am adding todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodos = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodos]);
    console.log(myTodos);

  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Header title="Todo List" searchbar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            );
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    
        <Footer />
      </Router>

    </>
  );
}

export default App;

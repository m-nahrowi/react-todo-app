import React, { useState } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },

  ])

  // Definisikan toggleCompleted
  const toggleCompleted = (todoId:number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  };

  const deleteTodo = (todoId:number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updatedTodos);
  };

  // Definisikan function addTodo
  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)

  }

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>
          My Todo List
        </h1>
        {/* Teruskan function toggleCompleted ke component Todos */}
        <TodoForm addTodo={addTodo}/>
        <Todos 
        todos={todos} 
        toggleCompleted={toggleCompleted} 
        deleteTodo={deleteTodo}
        />
      </div>
    </>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px'
  }
}


export default App

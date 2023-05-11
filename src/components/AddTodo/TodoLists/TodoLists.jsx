import React, { useState } from 'react';

const TodoLists = ({ todos, setTodos }) => {

  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')

  const deleteTodo = (id) => {
    const newTodo = [...todos].filter(item => item.id !== id)
    setTodos(newTodo);
  }

  const changeStatus = (id) => {
    const newTodo = [...todos].filter(item => {
      if (item.id === id) {
        item.status = !item.status
      }
      return item
    }) 
    setTodos(newTodo)
  }

  const changeTodo = (id, title) => {
    setEdit(id)
    setValue(title)
  }
 
  const saveTodo = (id) => {
    let newTodo = [...todos].map(item => {
      if (item.id === id){
        item.title = value;
      }
      return item
    })
    setTodos(newTodo)
    setEdit(null)
  }

  return (
    <div>
      {
        todos.map(todo => (
          <div key={todo.id}>
           {
              edit === todo.id ? (
                <><input className='input' onChange={(e) => setValue(e.target.value)} value={value} />
                  <button onClick={() => saveTodo(todo.id)}>Готово</button></>
              ) : (
                <>
                  <h1
                    style={{
                      textDecoration: todo.status && 'line-through'
                    }}
                  >{todo.title}</h1>
                  <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
                  <button onClick={() => changeTodo(todo.id,todo.title)}>Изменить</button>
                  <button onClick={() => changeStatus(todo.id)}>Сделано</button></>
              )
            }
          </div>
        ))
      }
    </div>
  );
};

export default TodoLists;
 
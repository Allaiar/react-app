// import AddTodo from "./components/AddTodo/AddTodo/AddTodo";
// import TodoLists from "./components/AddTodo/TodoLists/TodoLists";
// import "./App.css";

// const todoDB = [
  //   { id: 0, title: "Купить хлеб", status: false },
  //   { id: 1, title: "Купить воду", status: false },
  //   { id: 2, title: "Купить сахар", status: false },
  //   { id: 3, title: "Купить борщ", status: false },
//   { id: 4, title: "Купить колу", status: false },
//   { id: 5, title: "Купить дом", status: false },
// ];

// function App() {
  //   const [todos, setTodos] = useState(todoDB);
  //   return (
//       <div className="App">
//         <div>
//         <AddTodo todos={todos} setTodos={setTodos} />
//         <TodoLists todos={todos} setTodos={setTodos} />
//         </div>
//         <div>

//         </div>
//       </div>
//     );
//   }
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);
  const [word, setWord] = useState("");
  const [list, setList] = useState([]);
 function addList(){
  const newList= prompt('Записать новый пункт');
  setList([...list, newList])
 }
 function clearList(){
  setList([])
 }
 function removeList(index){
  const newLists = [...list];
  newLists.splice(index, 1);
  setList(newLists)
 }
  return (
    <div>
      <button onClick={addList}>Добавить в список</button>
        <button onClick={clearList}>Очистить</button>
      <div>
        {list.map((list, index) => (
          <p key={index}>{list}<button onClick={() => removeList(index)}>Удалить</button></p>
        ))}
      </div>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <p style={{ color: "black" }}>{word}</p>
      <h1>Тасбих:{state}</h1>
      <button
        style={{
          width: "70px",
          height: "30px",
          borderRadius: "10px",
        }}
        onClick={() => setState((state) => state + 1)}
      >
        Добавить
      </button>
      <button
        style={{
          width: "70px",
          height: "30px",
          borderRadius: "10px",
        }}
        onClick={() => setState((state) => state == 0)}
      >
        Стереть
      </button>
    </div>
  );
};

export default App;

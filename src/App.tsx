import {memo, useEffect, useState} from 'react';
import Todo from './components/Todo'
import './App.css'
import { listTodoType} from './components/interfaces';
import { TodoContext } from './components/TodoContexts';

function App() {
const [listTodos, setListTodos] = useState<listTodoType[]>([]);

const [saveLocalStorage, setSaveLocalStorage] = useState<boolean>(false);

  useEffect(()=>{

    if (localStorage.getItem('listTodos') !== null)

     setListTodos(JSON.parse(localStorage.getItem('listTodos') || ""))},[]);

  useEffect(() =>
   {
      if (saveLocalStorage === true)
       {localStorage.setItem('listTodos', JSON.stringify(listTodos))};
      setSaveLocalStorage(false)
  }, [listTodos, saveLocalStorage]);

  return (
    <div className="App">
      <header>All Task ({listTodos.length})</header>

      <div className="Todos">
        <TodoContext.Provider value={{listTodos,setListTodos,setSaveLocalStorage}}>
        <Todo condition="ToDo"/>
        <Todo condition="InProgress"/>
        <Todo condition="OnHold"/>
        <Todo condition="Done"/>
        </TodoContext.Provider>
      </div>
    </div>
  );
}
export default memo(App);
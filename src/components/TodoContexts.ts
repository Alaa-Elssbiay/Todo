import { createContext } from "react";
import { TodoTypeContext } from "./interfaces";


export const TodoContext = createContext<TodoTypeContext>({
    listTodos: [],
    setListTodos: () => {},
    setSaveLocalStorage:()=>{},
  });
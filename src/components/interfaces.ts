 export interface  listTodoType {
    id: number;
    title: string;
    body: string;
    date: number;
    TodoType: string;
  }
 export interface MoveCardType {
    card:listTodoType ;
    onMoveCards: (obj:listTodoType) => void;
  setMove: (value: boolean) => void;
  setSaveLocalStorage: (value: boolean) => void;
}

export interface textTodoType {target:{value: string,name:string}}

export interface  AddCardType {
    condition: string;
    listTodos:listTodoType[];
  setAdd: (value: boolean) => void;
  setSaveLocalstorage: (value: boolean) => void;
  onAddCard:(obj:listTodoType) => void;
}

   export interface  TodosPropsType {
    listTodos: listTodoType[];
    condition: string;
    setSaveLocalStorage: (value: boolean) => void;
    setListTodos: (key: listTodoType[]) => void;
  }
export interface propsBtn{
   preventDefault: () => void;
}
export interface  TodoTypeContext {
  listTodos: listTodoType[];
  setListTodos: (key: listTodoType[])=> void;
  setSaveLocalStorage: (value: boolean) => void;
};
export interface conditionType { 
  condition: string 
};
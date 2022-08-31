import { memo, useState, useCallback, useContext} from "react";
import AddCard from './AddCard';
import MoveCard from './MoveCard';
import {listTodoType,TodoTypeContext,conditionType} from './interfaces';
import { TodoContext } from "./TodoContexts";

const Todo = ({condition}: conditionType) => {
 const {listTodos,setListTodos,setSaveLocalStorage}=useContext<TodoTypeContext>(TodoContext)
    const [move, setMove] = useState(false)
    const [add, setAdd] = useState(false)
    const [card, setCard] = useState(
    {
    id: 0,
    title: "",
    body: "",
    date: 0,
    TodoType: "",
  });

  const onMoveCards =useCallback((releaseCard:listTodoType) => {
    const releaseCards = listTodos.map((card) => {
          if (card.id === releaseCard.id)
          return releaseCard;
          return card;
        });
        setListTodos(releaseCards)},[move]);
        
        const handleDelete = useCallback((cardDate: number) => ()=>{
          setListTodos(listTodos.filter((basicCard) => basicCard.id !== cardDate));
           setSaveLocalStorage(true)
          }, [listTodos, setListTodos, setSaveLocalStorage]);

        const handlemove = useCallback((cards:listTodoType)=>()=>{
          setMove(true);
          setCard(cards);
        },[]);

        const onAddCard =useCallback((newTodo: listTodoType) => {
          setListTodos([...listTodos, newTodo])
        },[listTodos])
        
        const addButton = useCallback(()=>setAdd(true),[listTodos]);

    return (
        <div className="Todo">
            <div className="Todo_head">
                <h3>{condition}</h3>
                <button onClick={addButton}>+</button>
            </div>
            
            {add && <AddCard condition={condition} onAddCard={onAddCard} listTodos={listTodos}
             setAdd={setAdd}  setSaveLocalstorage={setSaveLocalStorage}/>}

            {move && <MoveCard card={card} onMoveCards={onMoveCards} setMove={setMove} 
             setSaveLocalStorage={setSaveLocalStorage}/>}

            <div className="cardSide">
               {listTodos.filter((basicCard) => {
          if (basicCard.TodoType === condition&&basicCard.title.toLocaleLowerCase()&&basicCard.body.toLocaleLowerCase()){
            return basicCard;

        }}).map((basicCard) => {
          return(
            <div className="card" key={basicCard.id}>
                <div className="cardBody">

                <strong>{basicCard.title}</strong>
                
                <button onClick={handleDelete(basicCard.id)}>Delete</button>
                <button onClick={handlemove(basicCard)}>Move</button>
            </div>
                <p>{basicCard.body}</p>
                  <small>Last Update {new Date(basicCard.date).toLocaleTimeString()}</small>
            </div>
          )
        })}
            </div>

        </div>
    )
}

export default memo(Todo)
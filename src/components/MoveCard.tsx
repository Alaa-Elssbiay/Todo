import {memo, useCallback, useState} from 'react';
import {MoveCardType,propsBtn,textTodoType}from './interfaces';

const MoveCard = ({setSaveLocalStorage,onMoveCards,card,setMove}:MoveCardType) => {
    const [MoveCard, setMoveCard] = useState({
           "date": Date.now(),   
           "TodoType": card.TodoType,
           "title": card.title,
           "body": card.body,
           "id": +card.id,
       });
       
     const moveCardData=useCallback((e:propsBtn)=>{
        e.preventDefault()
        setMove(false)
        setSaveLocalStorage(true);
        onMoveCards(MoveCard);
    },[MoveCard, setSaveLocalStorage]);

    const changeTodoType = useCallback((e: textTodoType) => {
        setMoveCard({...MoveCard, "TodoType": e.target.value})
    },[MoveCard]);
    return (
            <form onSubmit={moveCardData}>
                <select onChange={changeTodoType}   value={MoveCard.TodoType}>
                    <option value="ToDo">ToDo</option>
                    <option value="InProgress">InProgress</option>
                    <option value="OnHold">OnHold</option>
                    <option value="Done">Done</option>
                </select>
                <button  className='move'>move</button>
            </form>
    )
}
export default memo(MoveCard)
import {memo, useCallback, useState} from 'react';
import {textTodoType,AddCardType,propsBtn} from './interfaces';

const AddCard = ({condition, listTodos, setAdd, onAddCard, setSaveLocalstorage }:AddCardType) => {
    const [dataCard,setDataCard]:any=useState({
        title:'',
        body:'',
    });

    const changeData =useCallback((event: textTodoType) => {
        let myData={...dataCard}
        myData[event.target.name]=event.target.value
        setDataCard(myData)
    },[dataCard])

     const AddCard=useCallback((e:propsBtn)=>{
        e.preventDefault()
        const newCard = {
            "title": dataCard.title,
            "body": dataCard.body,
            date: Date.now(),
            "TodoType": condition,
            id: listTodos.length+1,
        }
        setAdd(false)
        setSaveLocalstorage(true)
        onAddCard(newCard)

    },[dataCard,condition, listTodos.length, onAddCard, setAdd, setSaveLocalstorage]);
    return (
        
            <form className='card' onSubmit={AddCard}>
                <input
                type="text"
                required
                value={dataCard.title}
                name='title'
                onChange={changeData}
                placeholder="Enter your Todo title"
                />
                <textarea 
                required
                name='body'
                value={dataCard.body}
                onChange={changeData}
                placeholder="Enter your Todo body"
                />
                <button className='btn-Add'>Add</button>
            </form>
    )
}
export default memo(AddCard)
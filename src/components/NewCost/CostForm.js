import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: ''
    })
    
    const nameChangeHandler = (e) => setUserInput(prevState => ({...prevState, name: e.target.value}))
    const amountChangeHandler = (e) => setUserInput(prevState => ({...prevState, amount: e.target.value}))
    const dateChangeHandler = (e) => setUserInput(prevState => ({...prevState, date: e.target.value}))
    
    const submitHandler = (e) => {
        e.preventDefault()
        const costData = {
            description: userInput.name,
            amount: userInput.amount,
            date: new Date(userInput.date),
        };

        props.onSaveCostData(costData)
        
        setUserInput(prevState => {
            return Object.fromEntries(Object.entries(prevState).map(([key, value]) => [key, '']))  
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input value={userInput.name} onChange={nameChangeHandler} type='text' />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input value={userInput.amount} onChange={amountChangeHandler} type='number' min='0.01' step='0.01'/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input value={userInput.date} onChange={dateChangeHandler} type='date' min='2019-01-01' step='2022-12-31'/>
                </div>
                <div className="new-cost__actions">
                    <button type='submit'>
                        Добавить Расход
                    </button>
                    <button onClick={props.onCostDataSetFalse} type='button'>Отмена</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;

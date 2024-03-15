import './CostItem.css'
import CostDate from './CostDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

function CostItem({props}){
    
    const [state, setState] = useState(props);
    
    function log(e){
        setState(prevState => ({
            ...prevState,
            description: prevState.description + '1'
        }));
    }
    return (
        <Card className='cost-item'>
            <CostDate date={state.date}/>
            <div className='cost-item__description'>
                <h2>{state.description}</h2>
                <div className='cost-item__price'>${state.amount}</div>
            </div>
            <button onClick={log}>Изменить описание</button>
        </Card>
    )
}

export default CostItem;
import { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';


const NewCost = ({onAddCost}) => {
    const [isFormVisible, setIsFormVisible] = useState(false)
    
    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        };
        onAddCost(costData)
    }
    
    const inputCostDataHandler = () => setIsFormVisible(true);
    const inputCancelCostDataHandler = () => setIsFormVisible(false);
    
    return (
        <div className='new-cost'>
            {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
            {isFormVisible && <CostForm onCostDataSetFalse={inputCancelCostDataHandler} onSaveCostData={saveCostDataHandler}/>}
        </div>
    )
}

export default NewCost;
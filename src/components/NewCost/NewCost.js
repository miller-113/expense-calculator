import CostForm from './CostForm';
import './NewCost.css';


const NewCost = () => {
    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        };
        console.log(inputCostData)
    }
    return (
        <div className='new-cost'>
            <CostForm onSaveCostData={saveCostDataHandler}/>
        </div>
    )
}

export default NewCost;
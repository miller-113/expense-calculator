import CostForm from './CostForm';
import './NewCost.css';


const NewCost = ({onAddCost}) => {
    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        };
        onAddCost(costData)
    }
    return (
        <div className='new-cost'>
            <CostForm onSaveCostData={saveCostDataHandler}/>
        </div>
    )
}

export default NewCost;
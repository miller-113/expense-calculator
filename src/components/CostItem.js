import './CostItem.css'
import CostDate from './CostDate';

function CostItem({props}){
    const {date, description, amount} = props;
    return (
        <div className='cost-item'>
            <CostDate date={date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${amount}</div>
            </div>
        </div>
    )
}

export default CostItem;
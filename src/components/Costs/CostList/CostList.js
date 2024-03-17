import CostItem from "../CostItem";

import './CostList.css'

const CostList = ({filteredCosts}) => {

    if (!filteredCosts.length) {
        return (
        <h2 className="cost-list__fallback">
            Нет данных в этом году
        </h2>
        )
    }   
    
    return (
        <ul className="cost-list">
            {filteredCosts.map((el, ind) => 
            <CostItem key={ind} props={el}/>)}
        </ul>
    )
}

export { CostList };
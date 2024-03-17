import Card from "../UI/Card";
import { CostFilter } from "./CostFilter";
import './CostItemConteiner.css'
import { useState } from "react";
import { CostList } from "./CostList";

function CostItemConteiner({costs}){
    const [selectedYear, setSelectedYear] = useState('')
    const getYearInputHandler = (e) => setSelectedYear(e.target.value);
    
    const filteredCosts = costs.filter(cost => cost.date.getFullYear() == selectedYear);    
    
    return (
        <Card className="costs">
            <CostFilter year={selectedYear} onChangeYear={getYearInputHandler}/>
            <CostList filteredCosts={filteredCosts}/>
        </Card>

    )
}


export default CostItemConteiner;
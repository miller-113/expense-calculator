import Card from "../UI/Card";
import { CostFilter } from "./CostFilter";
import { useState } from "react";
import { CostList } from "./CostList";
import CostsDiagram from "./CostsDiagram";

import './CostItemConteiner.css'

function CostItemConteiner({costs}){
    const [selectedYear, setSelectedYear] = useState('')
    const getYearInputHandler = (e) => setSelectedYear(e.target.value);
    
    const filteredCosts = costs.filter(cost => cost.date.getFullYear() == selectedYear);    
    
    return (
        <Card className="costs">
            <CostFilter year={selectedYear} onChangeYear={getYearInputHandler}/>
            <CostsDiagram costs={filteredCosts}/>
            <CostList filteredCosts={filteredCosts}/>
        </Card>

    )
}


export default CostItemConteiner;
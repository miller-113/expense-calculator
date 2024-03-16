import Card from "../UI/Card";
import CostItem from "./CostItem";
import './CostItemConteiner.css'
function CostItemConteiner(){
    const costs = [
        {
            date: new Date(2022, 2, 12),
            description: "Холодильник",
            amount: 999.99
        },
        {
            date: new Date(2022, 4, 8),
            description: "Телевизор",
            amount: 499.99
        },
        {
            date: new Date(2022, 3, 20),
            description: "Микроволновка",
            amount: 239
        },
    ]
    return (
        <Card className="costs">
            {costs.map((el, ind) => <CostItem key={ind} props={el}/>)}
        </Card>
    )
}


export default CostItemConteiner;
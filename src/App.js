import { useState } from "react";

import CostItemConteiner from "./components/Costs/CostItemConteiner";
import NewCost from "./components/NewCost/NewCost";
import './index.css'
const INITIAL_COSTS = [
    { 
        id: '1',
        date: new Date(2022, 2, 12),
        description: "Холодильник",
        amount: 999.99
    },
    { 
        id: '2',
        date: new Date(2022, 4, 8),
        description: "Телевизор",
        amount: 499.99
    },
    { 
        id: '3',
        date: new Date(2022, 3, 20),
        description: "Микроволновка",
        amount: 239
    },
]

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  
  const addCostHandler = (cost) => {
    setCosts(prevState => {return [...prevState, cost]})
    
  }
  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler}/>
      <CostItemConteiner costs={costs}/>
    </div>
  );
}

export default App;

import CostItem from "./components/CostItem";

function App() {
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
    <div className="App">
      sometxt
      <CostItem props={costs[0]}></CostItem>
      <CostItem props={costs[1]}></CostItem>
      <CostItem props={costs[2]}></CostItem>
    </div>
  );
}

export default App;

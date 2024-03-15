
function CostDate({date}){
    const month = date.toLocaleString('re-RU', {month: 'long'});
    const year = date.getFullYear();
    const day = date.toLocaleString('re-RU', {day: '2-digit'});
    
    return (
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    )
}

export default CostDate;
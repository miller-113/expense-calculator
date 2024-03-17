import './CostFilter.css'

const CostFilter = ({year, onChangeYear}) => {

    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label for="year-select">Выбор по году</label>
                <select value={year} onChange={onChangeYear} name="years" id="year-select">
                    <option value="">Выберите год</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
            </div>
        </div>
    )
}

export { CostFilter };
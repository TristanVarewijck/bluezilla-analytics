const currencyChanger = () => {
    return (
        <div className="changer-container">
            <select id="currency-changer" class="form-select" aria-label="Default select example">
                <option value="usd" selected>USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>
        </div>
    );
}

export default currencyChanger;
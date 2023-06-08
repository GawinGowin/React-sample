const Selector = ({setCountry, countriesJson,}) => {
    return (
        <div className="selector-container">
            <select onChange={(e)=>setCountry(e.target.value)}>
                {countriesJson.map((value, i) => (
                <option key={i} value={value.Slug}>{value.Country}</option>
                ))}
            </select>
        </div>
    );
};

export default Selector;
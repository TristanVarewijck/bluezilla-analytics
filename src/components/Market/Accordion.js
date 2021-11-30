const accordionData = require('./data/coinText.json');

const InfoAccordion = ({ id, active }) => {
    return (
        <div className="accordion">
            <div className={(active === id ? "show" : "") + " accordionContent"}>
                <h3>{id}</h3>
                <p>{accordionData[id].text}</p>
                <a href={accordionData[id].url} target="_blank" rel="noreferrer" class="standard-btn-coloured btn-lg">Go to Website</a>

            </div>
        </div >
    )
}

export default InfoAccordion;
const accordionData = require('./data/coinText.json');
const InfoAccordion = ({ name, active }) => {
    return (

        <div className="accordion">

            <div className={(active === name ? "show" : "") + " accordionContent"}>
                <h3>{name}</h3>
                <p>{accordionData[name].text}</p>
                <a href={accordionData[name].url} target="_blank" rel="noreferrer" class="standard-btn-coloured btn-lg">Go to Website</a>

            </div>
        </div >
    )
}

export default InfoAccordion;
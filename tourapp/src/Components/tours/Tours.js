import Tour from "./tour/Tour";
import "../tours/Tours.css";
const data = require('../../data/db.json')
function Tours(props) {
    return (
        <>
            <h2 className="toursTitle">Tours List</h2>
            <div className="cards">
            <Tour list={data} />
            </div>
        </>
    )
}

export default Tours;
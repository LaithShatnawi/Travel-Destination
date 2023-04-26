import Tour from "./tour/Tour";
import "../tours/Tours.css";
import { Link } from "react-router-dom";
const data = require('../../data/db.json')
function Tours() {
    return (
        <>
            <h2 className="toursTitle">Tours List</h2>
            <Link to="/city/:id" className="cards">
                <Tour list={data} cityId={data.id} />
            </Link>
        </>
    )
}

export default Tours;
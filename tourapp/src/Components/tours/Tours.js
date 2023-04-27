import Tour from "./tour/Tour";
import "../tours/Tours.css";
function Tours({ data }) {
    return (
        <>
            <h2 className="toursTitle">Tours List</h2>
            <div className="cards">
                <Tour data={data} />
            </div>
        </>
    )
}

export default Tours;
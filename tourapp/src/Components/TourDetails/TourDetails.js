import { Link } from "react-router-dom";
function TourDetails(props) {
    return (
        <div>
            <Link to="/city/:id/deatails">{props.details}</Link>
        </div>
    )
}
export default TourDetails;
import { useParams } from "react-router-dom";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import './TourDetails.css'
function TourDetails({ data }) {
    const [showMore, setShowMore] = useState(false);
    const { id } = useParams();
    return (
        <div>
            {
                data.filter(element => element.id === id).map((element1, i) => {
                    return (
                        <div className="cardContainer">
                            <Card key={i} className='cityCard' id='card'>
                                <Card.Img id="image" className='image' variant="top" src={element1.image} />
                                <Card.Body>
                                    <Card.Title className='cityName'><h3>{element1.name}</h3></Card.Title>
                                    <Card.Text className='cityName'>
                                        <h6>
                                            {showMore ? element1.info : `${element1.info.substring(0, 200)}`}
                                            <button className="btn" onClick={() => setShowMore(!showMore)}>
                                                {showMore ? "Show less" : "Show more"}
                                            </button>
                                        </h6>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default TourDetails;
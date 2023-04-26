import './Tour.css'
import TourDetails from '../../TourDetails/TourDetails'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
function Tour(props) {
    let { id } = useParams(props.cityId);
    let showDetails = () => {
        <TourDetails details={id} />
    }
    return (
        <>
            {
                props.list.map((element, i) => {
                    return (
                        <div onClick={showDetails} id={i}>
                            <Card className='cityCard'>
                                <Card.Img className='image' variant="top" src={element.image} />
                                <Card.Body>
                                    <Card.Title className='cityName'><h3>{element.name}</h3></Card.Title>
                                    <Card.Text className='cityName'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Tour;
import './Tour.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Tour({ data }) {
    return (
        <>
            {
                data.map((element) => {
                    return (
                        <Link to={`/city/${element.id}`} key={element.id} className='link'>

                            <Card className='cityCard' >
                                <Card.Img className='image' variant="top" src={element.image} />
                                <Card.Body>
                                    <Card.Title className='cityName'><h3>{element.name}</h3></Card.Title>
                                    <Card.Text className='cityName'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    )
                })
            }
        </>
    )
}
export default Tour;
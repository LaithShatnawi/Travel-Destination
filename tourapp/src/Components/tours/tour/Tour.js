import './Tour.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Tour(props) {
    return (
        <>
            {
                props.list.map((element, i) => {
                    return (
                        <div id={element.id}>
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
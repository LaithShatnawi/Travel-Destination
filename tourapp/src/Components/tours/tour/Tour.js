import './Tour.css'
function Tour(props) {
    return (
        <>
            {
                props.list.map((element, i) => {
                    return (
                        <div className="cityCard" key={i}><h4 className='cityName'>{element.name}</h4><img className='image' src={element.image} alt={element.name} /></div>
                    )
                })
            }
        </>
    )
}
export default Tour;
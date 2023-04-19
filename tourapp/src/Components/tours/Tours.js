function Tours(props) {
    return (
        <>
            <h2>Tours List</h2>
            {
                 props.list.map((element,i)=>{
                    return(
            <div key={i}>{element.name}<br/><img src={element.image} alt={element.name} /></div>
            )
                })
            }
        </>
    )
}

export default Tours;
import Tours from "../tours/Tours";
function Home({data}) {
    return (
        <>
            <Tours data={data} />
        </>
    );
}

export default Home;
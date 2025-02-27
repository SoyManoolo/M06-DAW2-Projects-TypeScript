import { Link } from "react-router-dom"

function Home() {

    return (
        <>
        <Link to="/game" className="custom-link">
        <button className="play">Play</button>
        </Link>
            <button className="reset">Reset</button>
        </>
    )
}

export default Home
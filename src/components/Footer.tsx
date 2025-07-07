import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <>
        <footer>
            <div className="footer1">
                <Link to="/">FreeCloud</Link>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/moreInfo">Confidentiality</Link>
                <Link to="/infoUse">Terms of Use</Link>
                <Link to="/Premium"></Link>
            </div>
        </footer>
        </>
    )
}
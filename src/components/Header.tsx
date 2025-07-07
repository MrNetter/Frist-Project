import { Link } from "react-router-dom"
import search from '../img/search.png'

export const Header = () => {
    return (
        <>
        <header>
            <div className="header1">
                <nav className="nav none">
                    <ul className="ul1">
                        <p className="logo"><Link className="logo" to="/">Free Cloud</Link></p>
                        <Link to="/">Home</Link>
                        <Link to="/MoreMusic">More Music</Link>
                        <input className="search" type="search"
                        placeholder="Search..." 
                        />
                        <button type="submit"><img className="search-btn" src={search} /></button>
                        <Link to="PlayList">My PlayList</Link>
                        <Link to="/About">About</Link>
                        <Link className="premiumBtn" to="/Premium">Premium</Link>
                        <Link to="/SignIn">Sign In</Link>
                        <Link to="/SignUp">Sign Up</Link>
                        <button className="account-btn"><img src="#" alt="" /></button>
                    </ul>
                </nav>
                </div>
        </header>
        </>
    )
}
import { Link } from "react-router-dom"
export const Premium = () => {
    return (
        <>
        {/* <div>
            <h2 className="h22">Welcome to buy Premium FreeCloud</h2>
            <div className="premium-main">
                <div className="FreeCloud-basic">
                    <h3 className="h33">FreeCloud Basic <br />Price $1.99 per month</h3>
                    <p className="basic-text">(All feature FreeCloud Basic) <br /> dowload premium track 7 times a day free download with label Basic offline mode <br />limited download track with label Gold Plus Plus 2 times a day.... <Link to="#">click </Link>for more information</p>
                    <button className="basic-btn">Get Started</button>
                </div>
            </div>
        </div> */}
        <div>
            <h2 className="Error">
                Error Loading 503
            </h2>
            <h2>
                <Link to="/">Home</Link>
            </h2>
        </div>
        </>
    )
}
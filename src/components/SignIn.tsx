import { Link } from "react-router-dom"
export const SignIn = () => {
    return (
        <>
        <div className="form1">
            {/* <form className="form" action="">
                <h3>Sign In or create br an account</h3>
                <input type="text" 
                placeholder="username"
                />
                <input type="email" name="" id="" 
                placeholder="Your email address"
                />
                <input type="password" 
                placeholder="password"
                />
                <button type="submit">Submit</button>
                <Link to="/SignUp">Sign Up</Link>
            </form> */}
            <div>
            <h2 className="Error">
                Error Loading 503
            </h2>
            <h2>
                <Link to="/">Home</Link>
            </h2>
        </div>
        </div>
        </>
    )
}
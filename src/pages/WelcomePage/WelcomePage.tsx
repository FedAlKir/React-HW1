import { Link } from "react-router";

export const WelcomePage = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <Link to="/restaurants">Start</Link>
        </div>
    );
}
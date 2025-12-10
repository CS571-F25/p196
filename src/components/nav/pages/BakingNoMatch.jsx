import { Link } from "react-router";

export default function BakingNoMatch(props) {

    return (
        <div>
            <h2>That's a 404.</h2>
            <p>
                <Link to="/">Back to Home.</Link>
            </p>
        </div>
    );
}

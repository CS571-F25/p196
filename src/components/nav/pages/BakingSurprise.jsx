import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import BakingClubDataContext from "../../../context/BakingClubDataContext";

export default function BakingSurprise(props){
    const navigate = useNavigate();
    const recipes = useContext(BakingClubDataContext);

    useEffect(() => {
        if (recipes && Object.keys(recipes).length > 0) {
            const keys = Object.keys(recipes);
            const randomId = keys[Math.floor(Math.random() * keys.length)];
            navigate(`/recipes/${randomId}`);
        }
    }, [navigate]);

    return <div>
        <h1>This should pop up a random recipe!</h1>
    </div>
}
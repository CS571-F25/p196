import { useContext, useState } from "react"
import { Row, Col } from "react-bootstrap";

import BakingClubDataContext from "../../../context/BakingClubDataContext"
import BakingRecipeSummary from "./BakingRecipeSummary";

export default function BakingFavorites() {
    const recipes = useContext(BakingClubDataContext);
    const [favoriteList, setFavoriteList] = useState(() => {
        return JSON.parse(sessionStorage.getItem("favorites")) || [];
    });
    const savedRecipes = JSON.parse(sessionStorage.getItem("favorites")) || [];

    function unsaveRecipe(id) {
        alert(`${recipes[id].name} is removed from Favorites!`);
        const saved = JSON.parse(sessionStorage.getItem("favorites")) || [];
        const updated = saved.filter(r => r !== id);
        sessionStorage.setItem("favorites", JSON.stringify(updated));
        setFavoriteList(updated);
    }

    return <div>
        <h1>Your Favorites!</h1>
        <Row>
            { savedRecipes.length == 0 ? (
                <p>You don't have any favorite recipes yet!</p>
            ) : (
                savedRecipes.map((id) => {
                    const r = recipes[id];
                    const isSaved = favoriteList.includes(id);
                    return (
                        <Col xs={12} md={6} lg={4} xl={3} key={id}>
                            <BakingRecipeSummary {...r} id={id} isSaved={isSaved} unsave={unsaveRecipe}/>
                        </Col>
                    )
                })
            )}         
        </Row>
    </div>
}
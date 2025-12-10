import { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";

import BakingRecipeSummary from "./BakingRecipeSummary";
import BakingClubDataContext from "../../../context/BakingClubDataContext";

export default function BakingRecipes(props){
    const recipes = useContext(BakingClubDataContext);
    const [favoriteList, setFavoriteList] = useState(() => {
        return JSON.parse(sessionStorage.getItem("favorites")) || [];
    });
    const [level, setLevel] = useState("All");
    const filteredRecipes = Object.keys(recipes).filter(id => {
        if (level === "All") return true;
        return recipes[id].level === level.toLowerCase();
    })

    function saveRecipe(id) {
        alert(`${recipes[id].name} is saved to Favorites!`);
        
        const updated = [...favoriteList, id];
        setFavoriteList(updated);
        sessionStorage.setItem("favorites", JSON.stringify(updated));
    }

    function unsaveRecipe(id) {
        alert(`${recipes[id].name} is removed from Favorites!`);

        const updated = favoriteList.filter(r => r !== id);
        sessionStorage.setItem("favorites", JSON.stringify(updated));
        setFavoriteList(updated);
    }

    return <div>
        <h1 style={{ textAlign: "center" }}>Pick a recipe!</h1>
        <label htmlFor="level-selector">Level:</label>
        <select id="level-selector" style={{marginLeft: "5px"}} value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="All">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
        <Row>
            { recipes ?
                filteredRecipes.map(id => {
                    const r = recipes[id];
                    const isSaved = favoriteList.includes(id);

                    return (
                        <Col xs={12} md={6} lg={4} xl={3} key={id}>
                            <BakingRecipeSummary {...r} save={saveRecipe} unsave={unsaveRecipe} isSaved={isSaved} id={id}/>
                        </Col>
                    )
                })
                : <p>Still loading...</p>
            }
        </Row>
    </div>
}
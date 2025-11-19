import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router";
import BakingClubDataContext from "../../../context/BakingClubDataContext";

export default function BakingRecipeFull(props){
    const { id } = useParams();
    const recipes = useContext(BakingClubDataContext);
    const [recipe, setRecipe] = useState("");

    useEffect(() => {
        if (recipes) {
            setRecipe(recipes[id]);
        }
    }, [recipes, id]);

    if (!recipe) {
        return <p>Still loading...</p>
    }

    return <div>
        <h2>{recipe.name}</h2>
        <p>I will put image here!</p>
        <p>Source: <a href={recipe.source.link}>Allrecipes</a></p>
        <h6>Recipe by {recipe.source.name}</h6>
        <h4>Ingredients</h4>
        <ul>
            {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
        </ul>
        <h4>Recipe Steps: </h4>
        <ol>
            {recipe.recipe.map((step, idx) => <li key={idx}>{step}</li>)}
        </ol>
    </div>
}
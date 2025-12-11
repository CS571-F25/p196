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
        <img src={recipe.img} alt={`this is ${recipe.name}`} style={{width: 500}}/>
        <p>Source: <a href={recipe.source.link}>Allrecipes</a></p>
        <p><strong>Recipe by {recipe.source.name}</strong></p>
        <h3>Ingredients</h3>
        <ul>
            {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
        </ul>
        <h3>Recipe Steps: </h3>
        <ol>
            {recipe.recipe.map((step, idx) => <li key={idx}>{step}</li>)}
        </ol>
    </div>
}
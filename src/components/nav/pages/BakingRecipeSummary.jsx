import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function BakingRecipeSummary(props){
    const navigate = useNavigate();

    function showFullRecipe(){
        navigate(`/recipes/${props.id}`);
    }

    return <Card>
        <p>I will put image here!</p>
        <Card.Title>{props.name}</Card.Title>
        <Button onClick={showFullRecipe}>Show Recipes</Button>
    </Card>
}
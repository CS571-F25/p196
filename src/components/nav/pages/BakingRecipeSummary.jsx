import { Card, Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function BakingRecipeSummary(props){
    const navigate = useNavigate();
    const isSaved = props.isSaved;

    function showFullRecipe() {
        navigate(`/recipes/${props.id}`);
    }

    return <Card style={{marginBottom: "10px", marginTop: "10px"}}>
        <Card.Img src={props.img} alt={`this is ${props.name}`} style={{aspectRatio: "1/1", width: "100%"}}/>
        <Card.Title>{props.name}</Card.Title>
        <ButtonGroup style={{ gap: "10px"}}>
            <Button variant="primary" style={{borderRadius: "7px"}} onClick={showFullRecipe}>Show Recipes</Button>
            {  isSaved ? 
                <Button variant="danger" style={{borderRadius: "7px"}} onClick={() => props.unsave(props.id)}>Saved <AiFillHeart size={20}/></Button>
                : <Button variant="secondary" style={{borderRadius: "7px"}} onClick={() => props.save(props.id)}>Save <AiOutlineHeart size={20}/></Button>
            }
        </ButtonGroup>
    </Card>
}
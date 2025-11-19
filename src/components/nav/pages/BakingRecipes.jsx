import { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";

import BakingRecipeSummary from "./BakingRecipeSummary";
import BakingClubDataContext from "../../../context/BakingClubDataContext";

export default function BakingRecipes(props){
    const recipes = useContext(BakingClubDataContext);

    return <div>
        <h1 style={{ textAlign: "center" }}>Pick a recipe!</h1>
        <Row>
            { recipes ?
                Object.keys(recipes).map(id => {
                    const r = recipes[id];
                    return (
                        <Col xs={12} md={6} lg={4} xl={3} key={id}>
                            <BakingRecipeSummary {...r} id={id}/>
                        </Col>
                    )
                })
                : <p>Still loading...</p>
            }
        </Row>
    </div>
}
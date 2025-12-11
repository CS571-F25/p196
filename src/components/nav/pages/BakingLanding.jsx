import { Col, Container, Row } from "react-bootstrap";

import baking from "../../../assets/bakingPic.png"

export default function BakingLanding(props) {

    return <div>
        <br/>
        <h1 style={{fontFamily: "cursive"}}>Welcome to the Baking Club!</h1>
        <br/>
        <Container fluid={true}>
            <Row>
                <Col xs={12} lg={4} xl={6}>
                    <p>Baking Club contains a collection of simple and delicious dessert recipes.</p>
                    <p>Come try making some and enjoy the sweetness you create!</p>
                    <p>Every great baker starts with a single recipe. Let yours begin here.</p>
                </Col>
                <Col xs={12} lg={8} xl={6}>
                    <img alt="baking picture" src={baking} width="560" height="345" allow="picture-in-picture" allowFullScreen></img>
                </Col>
            </Row>
        </Container>
    </div>
}
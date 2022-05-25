import './tasks.css';
import {Container, ListGroup, Row, Card, Button} from "react-bootstrap";
import Task from "../task/Task";

function Tasks() {
    return(
    <Container>
        <ListGroup>
            <Row>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
            </Row>
        </ListGroup>
    </Container>
    )
}

export default Tasks
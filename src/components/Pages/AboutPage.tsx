import { Container, Col } from "react-bootstrap";
import PageLayout from "./PageLayout/PageLayout";

const AboutPage: React.FC = () => {
    return (
        <PageLayout>
            <Container>
                <Col>
                <h2>About</h2>
                <p>Buddy is here to keep track of and manage your tasks, keeping you productive and ensuring you get what you need to get done - done.</p>
                </Col>
            </Container>
        </PageLayout>
    )
}

export default AboutPage;
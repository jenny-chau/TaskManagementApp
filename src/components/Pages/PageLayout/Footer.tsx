import Container from 'react-bootstrap/Container';

const Footer: React.FC = () => {
    return (
        <Container fluid className="p-0 fixed-bottom mt-5">
            <footer className="bg-dark text-light text-center p-3">
                <p className="small">Buddy | Task Management App</p>
            </footer>
        </Container>
    )
}

export default Footer;
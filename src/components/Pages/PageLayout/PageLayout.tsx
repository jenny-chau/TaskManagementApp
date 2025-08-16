import {Container} from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";

type PageLayoutProps = {
    children? : React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    return (
        <Container className='my-5'>
            <NavBar/>
            {children}
            <Footer/>
        </Container>
    )
}

export default PageLayout;
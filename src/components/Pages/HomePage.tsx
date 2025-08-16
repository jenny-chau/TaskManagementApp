import LoginButton from "./Buttons/LoginButton";
import PageLayout from "./PageLayout/PageLayout";
import {Container} from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import TaskButton from "./Buttons/TaskButton";

const HomePage: React.FC = () => {
    const {user, isAuthenticated} = useAuth0();

    return (
        <PageLayout>
            <Container>
                <h1 className='mb-5'>Buddy | Your Task Management Helper</h1>
                {!isAuthenticated && <LoginButton/>}
                {isAuthenticated && 
                    <div>
                        <h2>Welcome {user?.name}</h2>
                        <div className='d-flex justify-content-center'>
                            <p className='mx-3 my-0 align-self-center'>Your tasks are here: </p>
                            <TaskButton/>
                        </div>
                    </div>
                }
            </Container>
        </PageLayout>
    )
}

export default HomePage;
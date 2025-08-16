import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import {useAuth0} from '@auth0/auth0-react';
import AuthenticationGuard from './components/AuthenticationGuard';
import "./App.css"
import AboutPage from './components/AboutPage';
import TasksPage from './components/TasksPage';

const App: React.FC = () => {
  const {isLoading, error} = useAuth0();
  if (isLoading) return (<div>Loading...</div>)
  if (error) return(<div>Error</div>)

  return (
    <Routes>
        <Route 
          path='/' 
          element={<HomePage/>} 
        />
        <Route
          path='/about'
          element={<AboutPage/>}
        />
        
        <Route 
          path="/tasks"
          element={<AuthenticationGuard component={TasksPage}/>}
        />
    </Routes>
  );
};

export default App;
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithNav from './components/Auth0Provider.tsx';
import App from './App.tsx'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskProvider from './components/TaskProvider.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <TaskProvider>
    <BrowserRouter>
      <Auth0ProviderWithNav>
        <App/>
      </Auth0ProviderWithNav>
    </BrowserRouter>
  </TaskProvider>
);
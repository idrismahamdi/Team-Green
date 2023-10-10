import './App.css';
import {CreateAccount} from './CreateAccount';
import { LoginForm } from './LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoutesPage from './RoutesPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="routes-page" element={<RoutesPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

import './App.css';
import CreateAccount from './CreateAccount';
import { LoginForm } from './LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="createAccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

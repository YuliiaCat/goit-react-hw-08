import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import Layout from './components/Layout/Layout';
  
function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='register' element={<RegistrationPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='contacts' element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}

export default App

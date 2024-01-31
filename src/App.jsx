// import ProtectedRoute from './ProtectRoute'
import { useRoutes } from 'react-router-dom';
import { Routes } from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

function App() {
  const element = useRoutes(Routes)
  return element
}

export default App

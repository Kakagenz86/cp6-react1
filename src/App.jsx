// import ProtectedRoute from './ProtectRoute'
import { useRoutes } from 'react-router-dom';
import { Routes } from './Routes';

function App() {
  const element = useRoutes(Routes)
  return element
}

export default App

import './estilos/style.css';
import Lista from './components/Lista';
import Login from './components/Login';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  /** validar si el usuario esta logeado */
  const { user, isAuthenticades } = useAuth0();
  console.log(window.location.origin);
  return (
    <div className="App">
      <h1>Hola! Chicos</h1>
      <h2>Bienvenidos</h2>
      <Lista />
      {
        isAuthenticades ? ( console.log("Hola")) : (<Login />)
      }
      
    </div>
  )
}

export default App

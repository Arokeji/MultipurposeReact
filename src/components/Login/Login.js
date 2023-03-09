import React from "react";
import "./Login.scss";
import { LoginContext } from "../../App";
import { ThemeContext } from "../../App";


const Login = () => {

  //Contexts
  const login = React.useContext(LoginContext);
  const theme = React.useContext(ThemeContext);

  //Refs 
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  //States
  const [error, setError] = React.useState();

  const doLogin = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username === "admin") {
      if (password === "1234") {
        setError(null);
        login.updateUserInfo(username);
      } else {
        setError("Contraseña incorrecta");
      }
    } else {
      setError("Usuario inexistente");
    }
  }

  return (
      <div style={{ background: theme.background, color: theme.fontColor }}>
        <p>Usuario: {login.currentUsername}</p>

        {login.currentUsername ?
          <button onClick={() => login.updateUserInfo(null)}>Logout</button> :

          <form onSubmit={doLogin}>
            <p><input ref={usernameRef} placeholder="Nombre de usuario" type="text" /></p>
            <p><input ref={passwordRef} placeholder="Contraseña" type="password" /></p>

            <button>Login</button>

            <p className="error">{error}</p>
          </form>
        }
      </div>
  )
}


export default Login;
import './App.scss';
import ApisInfoGroup from './components/ApisInfoGroup';
import useCounter from './hooks/useCounter';
import React from 'react';
import Login from './components/Login/Login';
import Counter from './components/Counter/Counter';

//Contexts
export const ThemeContext = React.createContext();
export const LoginContext = React.createContext();

const themes = {
  light: {
    name: "Light",
    background: "#FFF",
    fontColor: "#000",
  },
  dark: {
    name: "Dark",
    background: "#000",
    fontColor: "#FFF",
  }
}

//Dynamic components
const LongTextLazy = React.lazy(() => import('./components/LongText/LongText'));

function App() {

  const [counter, handleIncrement, handleDecrement] = useCounter(25);
  const [secondCounter, secondHandleIncrement, secondHandleDecrement] = useCounter(70);

  //States
  const [themeState, setThemeState] = React.useState(themes.light);
  const [userState, setUserState] = React.useState();

  const updateUserInfo = (username) => {
    setUserState(username);
  }

  const loginProviderValue = {
    currentUsername: userState,
    updateUserInfo: updateUserInfo,
  }

  return (
    <LoginContext.Provider value={loginProviderValue}>
      <div className="App">

        <h2>Lazy component:</h2>
        <ThemeContext.Provider value={themeState}>
          <React.Suspense fallback={<div>Cargando...</div>}>
            <LongTextLazy></LongTextLazy>
          </React.Suspense>
        </ThemeContext.Provider>

        <h2>Login:</h2>
        <ThemeContext.Provider value={themeState}>
          <Login></Login>
        </ThemeContext.Provider>

        <h2>Themes (contexts)</h2>
        <p>Current theme: {themeState.name}</p>
        <button onClick={() => setThemeState(themeState === themes.light ? themes.dark : themes.light)}>Cambiar tema</button>

        <ThemeContext.Provider value={themeState}>
          <Counter 
            name="1"
            counter={counter} 
            handleIncrement={handleIncrement} 
            handleDecrement={handleDecrement} 
          />

          <Counter 
            name="2"
            counter={secondCounter} 
            handleIncrement={secondHandleIncrement} 
            handleDecrement={secondHandleDecrement} 
          />
        </ThemeContext.Provider>
        <h2>API Requests</h2>

        <ThemeContext.Provider value={themeState}>
          <ApisInfoGroup></ApisInfoGroup>
        </ThemeContext.Provider>

      </div>
    </LoginContext.Provider>
  );
}

export default App;


import React from "react";
import { LoginContext, ThemeContext } from "../App";

//Lazy components
const PokemonInfoLazy = React.lazy(() => import("./PokemonInfo"));
const StarwarsInfoLazy = React.lazy(() => import("./StarWarsInfo"));



const ApisInfoGroup = () => {
  
  //Contexts
  const login = React.useContext(LoginContext);
  const theme = React.useContext(ThemeContext);

  //States
  const [showComponents, setShowComponents] = React.useState(false);

  //Refs
  const myRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          setShowComponents(true);
        }
      });
    });

    observer.observe(myRef.current);
  }, []);

  return (
    <div ref={myRef} style={{ 'borderTop': '1px solid red' }}>

      {login.currentUsername ?
        (showComponents ?
          <React.Suspense fallback={<p>Cargando...</p>}>
            <PokemonInfoLazy></PokemonInfoLazy>
            <StarwarsInfoLazy></StarwarsInfoLazy>
          </React.Suspense> :
          <p>Componentes ocultos</p>
      ) : 
          <div style={{ background: theme.background, color: theme.fontColor }}>
            <p>Debes hacer login para ver el resultado de las API</p>
          </div>
      }
      </div>
  )
}

export default ApisInfoGroup;
import Header from './layout/components/Header';
import './App.css';
import MyProjects from './view/projects/MyProjects'
import Home from './view/accueil/Home';
import CreateProject from './view/adproject/components/CreateProject';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./layout/Main";


function App() {
  return (
    <div>


<Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main>
                <Home />
              </Main>
            )}
          />


          <Route
            exact
            path="/projets"
            render={() => (
              <Main>
                <MyProjects />
              </Main>
            )}
          />
          <Route
            exact
            path="/nouveauprojet"
            render={() => (
              <Main>
                < CreateProject />
              </Main>
            )}
          />
        
          </Switch>
      </Router> 


   
      
{/* < CreateProject /> */}
    </div>
  );
}

export default App;

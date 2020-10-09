import React from 'react';
import Header from './ui/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';


import theme from './theme/Theme';
import Home from './pages/Home';



class App extends React.Component {

  render() { 
    return ( 
      <div>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/tech" component={() => <div>
                TECH
              </div>} />
              <Route
                exact
                path="/game" component={() => <div>
                GAME
                </div>} />
              <Route
                exact
                path="/scripture" component={() => <div>
                Scripture
              </div>} />
              <Route
                exact
                path="/algos" component={() => <div>
                Algos
              </div>} />
              <Route
                exact
                path="/about" component={() => <div>
                About
              </div>}/>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </div>
     );
  }
}
 
export default App;


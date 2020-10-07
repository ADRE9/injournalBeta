import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/theme/Theme';


import LandingPage from './components/LandingPage';

const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <LandingPage/>
    </ThemeProvider>
  </Provider>, document.querySelector('#root'));
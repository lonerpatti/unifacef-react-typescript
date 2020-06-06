import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import {syncHistoryWithStore} from 'mobx-react-router';

import 'semantic-ui-css/semantic.min.css'

import { router } from './mobx';
import * as store from './mobx';

import './plugins/sentry.plugin';

const rootElement = document.getElementById('root');
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore (browserHistory, router) ;

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Router history={history}>

      </Router>
    </Provider>
    <App />
  </React.StrictMode>,
   rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

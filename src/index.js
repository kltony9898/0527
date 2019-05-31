import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore ,{history}from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Fakepage from './component/fakepage';
import PrivateRoute from './component/PrivateRouter';
import Signup  from './component/signup';

/////////////////////////////////
const store = configureStore();
// 依據我們撰寫的 reducer 建立出 store

ReactDOM.render(
  <Provider store={store}>
   <ConnectedRouter history={history}> { /* 必須在provider下面 */ }
   <Switch>
      <Route exact path="/" component={App} />
      {/* <Route  path="/loading" component={Loading} /> */}
 
      <PrivateRoute exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/fakepage" component={Fakepage}/>
    </Switch>

    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

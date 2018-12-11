import * as React from 'react';
import './include/bootstrap';
import './App.css';
import './Associate.css';
import AppNav from './components/nav/nav.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import HomeComponent from './components/home/home.component';
import { Provider } from 'react-redux';
import { store } from './Store';
import Loading from './components/loading/loading.component';
import { AssociateContent } from './components/associate/associatecontent.component';
// import ManagerContentComponent from './components/manager/manager-content.component';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <AppNav />
            <div id="main-content-container">
              <Switch>
                <Route component={AssociateContent} />
              </Switch>
            </div>
            <Loading />
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

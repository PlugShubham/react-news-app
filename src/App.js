import React, { Component } from 'react';
import './App.css';
import Routes from './components/routes/routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

class App extends Component {
  render() {
    const store = createStore(rootReducer);
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Routes />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

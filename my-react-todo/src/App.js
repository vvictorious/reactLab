import React, { Component } from 'react';
import Header from './components/Header';
import myRoutes from './config/routes';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        { myRoutes}
      </div>
    );
  }
}




export default App;
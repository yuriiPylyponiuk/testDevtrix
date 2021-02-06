import React from 'react';
import './App.css';
import RouterPages from '../../router/mainRouter'

class App extends React.Component {
  render(){
    return (
      <div>
        <RouterPages />
      </div>
    );
  }
}

export default App;
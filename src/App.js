import React from 'react';
import Game from './Components/TikTakToe/Game';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home';
import ToDo from './Components/ToDo/ToDo';

function App() {
  return (
    // <Game />
    <Router>
      <Switch>
        <Route path="/tiktaktoe"> <Game /> </Route>
        <Route path="/todo" component={ToDo} />
        <Route path="/"> <Home /> </Route>
      </Switch>
    </Router>
  );
}

export default App;

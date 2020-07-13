import React, {Suspense, lazy} from 'react';
// import Game from './Components/TikTakToe/Game';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header/Header';

// import ToDo from './Components/ToDo/ToDo';

const ToDo = lazy(() => import('./Components/ToDo/ToDo'));
// const Home = lazy(() => import('./Components/Home'));
const Game = lazy(() => import('./Components/TikTakToe/Game'));
const Forms = lazy(() => import('./Components/Forms/Forms'));

function App() {
  return (
    // <Game />
    <div>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/tiktaktoe"> <Game /> </Route>
            <Route path="/todo" component={ToDo} />
            <Route path="/forms" component={Forms} />
            <Route path="/"> <Home /> </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

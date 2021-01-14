import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreateBlog from './components/CreateBlog/CreateBlog';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;

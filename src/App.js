
import './App.css';
import Home from './Home.js';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          {/* always put / path last  */}
          <Route path="/search">
            <SearchPage />
          </Route>      

          <Route path="/">
            <Home />
          </Route>  
          
          
        
        </Switch>

        

        <Footer />
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./components/nav";
import { Switch, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Book from "./components/books";
import AddBook from "./components/addbook";
function App() {
  return (
    <div className="App">
      <Nav />
      
      <Switch>
      <Route path="/books" component={Book} />
      <Route path="/addbook" component={AddBook} />
      </Switch>

    
    </div>
  );
}

export default App;
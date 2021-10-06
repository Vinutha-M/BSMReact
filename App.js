import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./components/nav";
import { Switch, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Book from "./components/books";
import AddBook from "./components/addbook";
import UpdateBook from "./components/updatebook";
function App() {
  return (
    <div className="App">
      <Nav />
      
      <Switch>
      <Route path="/books" component={Book} />
      <Route path="/addbook" component={AddBook} />
      <Route path="/update/:bookId" component={UpdateBook} />
      </Switch>

    
    </div>
  );
}

export default App;
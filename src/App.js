import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header'
import Contact from './components/Contact/Contact';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header'
import Contact from './components/Contact/Contact';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login';
import ServiceDetails from './components/Home/serviceDetails/ServiceDetails';
import MakeAppoinment from './components/MakeAppoinment/MakeAppoinment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PendingAppoinment from './components/PendingAppoinment/PendingAppoinment';
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
          <PrivateRoute path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/make-appoinment">
            <MakeAppoinment></MakeAppoinment>
          </PrivateRoute>
          <PrivateRoute path="/pending-appoinment">
            <PendingAppoinment></PendingAppoinment>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

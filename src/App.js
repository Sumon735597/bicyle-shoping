
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ViewAll from './Pages/ViewAll/ViewAll';
import Navigation from './Shared/Navigation/Navigation';
import PlaceOrders from './Pages/PlaceOrders/PlaceOrders';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/Home/DashBoard/DashBoard';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/viewAll">
            <ViewAll />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/dashBoard">
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute path="/placeOrders/:id">
            <PlaceOrders/>
          </PrivateRoute>
          </Switch>
          <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

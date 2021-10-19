import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Doctors from './components/Doctors/Doctors';

import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services';
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from './context/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route path="/about-us">
            <About></About>
          </Route>

          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <PrivateRoute path="/service/:serviceId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>

          <Route path="/contact-us">
            <Contact></Contact>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;

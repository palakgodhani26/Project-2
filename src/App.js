import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Container/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Department from './Container/Department/Department';
import Doctors from './Container/Doctors/Doctors';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Auth from './Container/Auth/Auth';
import Medicines from './Container/Medicines/Medicines';
import Refexample from './Container/Refexample/Refexample';
import ListAppointment from './Container/Appointment/ListAppointment';
import BookAppointment from './Container/Appointment/BookAppointment';
import PublicRoute from './Route/PublicRoute';
import PrivateRoute from './Route/PrivateRoute';
import { ThemeProvider } from './Context/ThmeContext';

function App() {
  return (
    <>
    <ThemeProvider>
        <Header />
        
        <Switch>

          <PublicRoute path={"/"} exact component={Home}/>
          <PublicRoute path={"/department"} exact component={Department}/>
          <PublicRoute path={"/doctors"} exact component={Doctors}/>
          <PublicRoute path={"/about"} exact component={About}/>
          <PublicRoute path={"/contact"} exact component={Contact}/>
          <PublicRoute path={"/auth"} restricted={true} exact component={Auth}/>
          <PublicRoute path={"/medicines"} exact component={Medicines}/>
          <PublicRoute path={"/refexample"} exact component={Refexample}/>
          <PrivateRoute path={"/BookAppointment"} exact component={BookAppointment}/>
          <PrivateRoute path={"/ListAppointment"} exact component={ListAppointment}/>

        </Switch>
        </ThemeProvider>
        <Footer />
    </>
  );
}

export default App;

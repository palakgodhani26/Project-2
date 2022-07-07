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

function App() {
  return (
    <>
        <Header />
        
        <Switch>

          <Route path={"/"} exact component={Home}/>
          <Route path={"/department"} exact component={Department}/>
          <Route path={"/doctors"} exact component={Doctors}/>
          <Route path={"/about"} exact component={About}/>
          <Route path={"/contact"} exact component={Contact}/>
          <Route path={"/auth"} exact component={Auth}/>
          <Route path={"/medicines"} exact component={Medicines}/>
          <Route path={"/refexample"} exact component={Refexample}/>
          <Route path={"/BookAppointment"} exact component={BookAppointment}/>
          <Route path={"/ListAppointment"} exact component={ListAppointment}/>

        </Switch>


        <Footer />
    </>
  );
}

export default App;

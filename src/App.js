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



        </Switch>


        <Footer />
    </>
  );
}

export default App;

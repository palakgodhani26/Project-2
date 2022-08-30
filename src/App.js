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
import { store } from '../src/Redux/Store';
import { Provider } from 'react-redux';
import ToggleThemecontext from './Context/ThmeContext';
import { persistor} from './Redux/Store';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToggleThemecontext>
              <Header />

              <Switch>

                <PublicRoute path={"/"} exact component={Home} />
                <PublicRoute path={"/department"} exact component={Department} />
                <PublicRoute path={"/doctors"} exact component={Doctors} />
                <PublicRoute path={"/about"} exact component={About} />
                <PublicRoute path={"/contact"} exact component={Contact} />
                <PublicRoute path={"/auth"} restricted={true} exact component={Auth} />
                <PublicRoute path={"/medicines"} exact component={Medicines} />
                <PublicRoute path={"/refexample"} exact component={Refexample} />
                <PrivateRoute path={"/BookAppointment"} exact component={BookAppointment} />
                <PrivateRoute path={"/ListAppointment"} exact component={ListAppointment} />

              </Switch>
            </ToggleThemecontext>
            <Footer />
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;

import './App.css';
import React, { Fragment } from 'react';
import Navs from './components/Navs/Navs';
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics ';
import Bookevent from './components/Bookevent/Bookevent';
import AboutUs from './components/About-Us/AboutUs';
import Account from './components/Account/Account';
import MustViewed from './components/Must-viewed/MustViewed';
import Providers from './components/Top-Providers/Providers';
import ContactUs from './components/Contact-us/ContactUs';
import HowWork from './components/How-Work/HowWork';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <Fragment >
      <Navs />
      <Header />
      <Statistics />
      <Bookevent />
      <AboutUs />
      <Account />
      <MustViewed />
      <Providers />
      <ContactUs />
      <HowWork />
      <Footer />
    </Fragment>
  );
}

export default App;

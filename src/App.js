import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Fragment} from 'react';
import Header from './components/Header/Header'
import FirstSection from './components/Sections/FirstSection'
import SecondSection from './components/Sections/SecondSection'
import ThirdSection from './components/Sections/ThirdSection'
import {BlockQuote} from './components/Cards/Cards' 
import Footer from './components/Footer/Footer'
import './App.css';


function App() {
  return (
    <Fragment>
    <Header/>
    <FirstSection/>
    <BlockQuote/>
    <SecondSection/>
    <ThirdSection/>
    <Footer/>
    </Fragment>

    
  );
}

export default App;

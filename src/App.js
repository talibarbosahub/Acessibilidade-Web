import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Fragment} from 'react';
import Header from './components/Header/Header'
import FirstSection from './components/Sections/FirstSection'
import SecondSection from './components/Sections/SecondSection'
import {BlockQuote} from './components/Cards/Cards' 
import './App.css';


function App() {
  return (
    <Fragment>
    <Header/>
    <FirstSection/>
    <BlockQuote/>
    <SecondSection/>
    </Fragment>

    
  );
}

export default App;

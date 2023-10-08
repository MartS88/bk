import React from 'react';
import s from './App.module.scss';
import Cards from './components/cards/Cards';
import SearchForm from "./components/searchform/SearchForm";

const App = () => {

    return (
        <div className={s.app}>

            <img src={require('../src/assets/logo.png')}/>

            <div>
                <SearchForm/>
            </div>
            <div className={s.cards}>
                <Cards/>
            </div>

        {/*    SDELAT" Layout pervaja stranica <HOME/> eto SearchForm i Cards/

        vtoroaj SEARCH FORM i CARD
        */}
        </div>
    );
}

export default App;

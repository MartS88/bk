import React from 'react';
import s from './Home.module.scss'
import '../../index.css'
import SearchForm from "../../components/searchform/SearchForm";
import Cards from "../../components/cards/Cards";
import Logo from "../../components/logo/Logo";

const Home = () => {


    return (
        <div className={s.home}>

            <div className={s.block}>
                <Logo/>
                <SearchForm/>

            </div>
                <Cards/>

        </div>
    );
};

export default Home;
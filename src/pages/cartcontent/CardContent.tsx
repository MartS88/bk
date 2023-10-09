import React from 'react';
import s from './CardContent.module.scss'
import Logo from "../../components/logo/Logo";
import SearchForm from "../../components/searchform/SearchForm";
import Card from "./card/Card";
import CardItem from "./card/Card";
const CardContent = () => {
    return (
        <div className={s.card_content}>

            <div className={s.block}>
                <Logo/>
                <SearchForm/>
            </div>
                <div className={s.card_block}>
                    <CardItem/>


                </div>

        </div>
    );
};

export default CardContent;
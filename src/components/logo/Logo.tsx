import React from 'react';
import s from './Logo.module.scss'
import {useNavigate} from "react-router-dom";
const Logo = () => {



    return (
        <img src={require('../../assets/logo.png')} className={s.logo} draggable={false}/>
    );
};

export default Logo;
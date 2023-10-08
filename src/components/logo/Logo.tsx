import React from 'react';
import s from './Logo.module.scss'
const Logo = () => {
    return (
        <img src={require('../../assets/logo.png')} className={s.logo}/>
    );
};

export default Logo;
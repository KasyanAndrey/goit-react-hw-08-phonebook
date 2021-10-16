import React from 'react';
import s from './stylesPage/HomePage.module.css'

const HomePage = () => (
  <div className={s.wrapper}>
    <h1 className={s.title}>Welcome to the home page</h1>
    <p className={s.description}>Thanks to this wonderful application, you always have your <span>phone book</span> at hand.<span></span></p>
  </div>
);

export default HomePage;

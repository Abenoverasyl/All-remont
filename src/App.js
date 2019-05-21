import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div className={s.appWrapper}>
            <div className={s.appBody}>
                <Menu/>
                <Header/>
                <MainContent/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';


const App = (props) => {
    return (
        <div className={s.appWrapper}>
            <div className={s.appBody}>
                <Header contacts={props.state.contacts}/>
                <MainContent howWeWorks={props.state.howWeWorks}/>
                <Menu menuItems={props.state.menuItems}/>
                <Footer menuItems={props.state.menuItems} contacts={props.state.contacts}/>
            </div>
        </div>
    );
}

export default App;
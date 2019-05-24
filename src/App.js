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
                <Header headerElements={props.state.headerElements}/>
                <MainContent howWeWorks={props.state.howWeWorks}/>
                <Menu menuItems={props.state.menuItems}/>
                <Footer menuItems={props.state.menuItems} headerElements={props.state.headerElements}/>
            </div>
        </div>
    );
}

export default App;
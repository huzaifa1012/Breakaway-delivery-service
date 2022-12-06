import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Header from './components/navbar/navbar';
import Header01 from './components/navbar/navbar';
import Rout from './components/rout/rout';
import Carausal from './components/carausal/carausal';
import Categories from './components/categories/categories';
import { Cards } from './components/CardsSection/cards';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    {/* <Header/> */}
    <Header01/>
    <Carausal/>
    <Categories/>
    <Cards/>
    
    {/* <Rout/> */}

</>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

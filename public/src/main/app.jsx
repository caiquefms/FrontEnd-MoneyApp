import '../common/template/dependencies';
import React from 'react';
import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Routes from './routes';

export default props => (
    <div className='wrapper'>
        <h1>App</h1>
        <Header/>
        <Sidebar/>
        <div className='content-wrapper'>
            <Routes/>
        </div>
        <Footer/>
    </div> 
)
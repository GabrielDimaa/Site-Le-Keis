import React from 'react'
import '../scss/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery'

import Header from '../templates/Header'
import Nav from '../templates/Nav'
import Section from '../templates/Section'
import Footer from '../templates/Footer'

export default props =>
    <div className="App">
        <Header />
        <Nav />
        <Section />
        <Footer />
    </div>
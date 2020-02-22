import React from 'react'

import '../scss/Nav.scss'
import Logo from '../../assets/img/Logo.png'

export default props =>
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" id="mainNav">
        <a class="navbar-brand" href="#page-top">
            <img className="img-logo" src={Logo} alt="logo"/>
        </a>
        <button className="button-edit" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item mr-4">
                    <a class="nav-link js-scroll-trigger" href="#fotos">Fotos</a>
                </li>
                <li class="nav-item mr-4">
                    <a class="nav-link js-scroll-trigger" href="#contatos">Contatos</a>
                </li>
            </ul>
        </div>
    </nav>
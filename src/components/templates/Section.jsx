import React from 'react'

import Galery from './Galery'
import '../scss/Section.scss'
import Wpp from '../../assets/img/Wpp.png'
import Face from '../../assets/img/Facebook.png'
import Insta from '../../assets/img/Instagram.png'

export default props =>
    <section className="section" id="myBtnContainer">
        <div class="btn-group btn-group-lg col-lg-8">
            <button type="button" className="btn" onclick="filterDog()">Shih-tzu</button> 
            <button type="button" className="btn" onclick="filterDog()">Spitz alemão</button>
            <button type="button" className="btn" onclick="filterDog()">Todos</button>
        </div>

        <Galery />
    
        <br/><hr/><br/>

        <h2 id="contatos">Contatos</h2>
        <hr/><br/>

        <div className="flex-container">
           <div className="col-12 m-3">
                <img src={Wpp} className="redes-sociais" alt="redesSociais"/>
                <label>(51) 98235-0291</label>
           </div>
           <div className="col-12 m-3">
                <a href="https://www.facebook.com/Le-Keis-Shih-Tzu-Kennel-440836876261820/">
                    <img src={Face} className="redes-sociais facebook" alt="redesSociais"/>
                </a>
                <a className="link-sociais" href="https://www.facebook.com/Le-Keis-Shih-Tzu-Kennel-440836876261820/">
                    <label>Facebook</label>
                </a>
           </div>
           <div className="col-12 m-3">
               
                <img src={Insta} className="redes-sociais" alt="redesSociais"/>
                <label>Instagram</label>
           </div>
        </div>

    </section>
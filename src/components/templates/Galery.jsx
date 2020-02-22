import React from 'react'

import '../scss/Galery.scss'
import Lulu1 from '../../assets/img/lulu1.jpg'
import Lulu2 from '../../assets/img/lulu2.jpg'
import Shitzu1 from '../../assets/img/shitzu1.jpg'
import Shitzu2 from '../../assets/img/shitzu2.jpg'
import Shitzu3 from '../../assets/img/shitzu3.jpg'
import Lulu4 from '../../assets/img/lulu4.jpg'

export default props =>
    <div class="row" id="fotos">
        <div class="container">
            <h2>Fotos</h2>
            <hr/>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <img src={Lulu1} className="edit-img img-thumbnail lulu" alt="foto1"/>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <img src={Lulu2} className="edit-img img-thumbnail lulu" alt="foto1"/>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <img src={Shitzu1} className="edit-img img-thumbnail" id="shitzu" alt="foto1"/>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <img src={Shitzu2} className="edit-img img-thumbnail" id="shitzu" alt="foto1"/>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <img src={Shitzu3} className="edit-img img-thumbnail" id="shitzu" alt="foto1"/>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <img src={Lulu4} className="edit-img img-thumbnail lulu" alt="foto1"/>
        </div>
    </div>
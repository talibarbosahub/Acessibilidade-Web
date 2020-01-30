import React, {Fragment} from 'react';
import StyleNav from './Nav/StyleNav'
import './Header.css'
import {Image} from 'react-bootstrap'
import acessibilidade from '../../assets/acessibilidade.gif'

const Header =()=>(
<Fragment>
        <div className="title">
            <h1 tabindex="0" >Acessibilidade na Web</h1>
            <h2 tabindex="0">Esta página tem como objetivo reunir informações de diversos sites para facilitar o entendimento sobre o tema de acessibilidade na web. Ao final do conteúdo estão disponíveis os links das referências.</h2>
        </div>
        <StyleNav />
        <div className="imgHeader">
        <Image tabindex="0" className="header__img" src={acessibilidade} alt="Grupo de pessoas felizes, com diferentes tipos de necessidades especiais acenando" fluid />
        </div>
    </Fragment>
)

export default Header



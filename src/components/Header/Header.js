import React, {Fragment} from 'react';
import StyleNav from './Nav/StyleNav'
import './Header.css'
import {Image, Container} from 'react-bootstrap'
import acessibilidade from '../../assets/acessibilidade.gif'

const Header =()=>(
<Fragment>
        <div className="title">
            <h1 tabindex="" className="title">Acessibilidade web</h1>
            <p tabindex=""className="sub__title">Esta página tem como objetivo reunir informações de diversos sites para facilitar a seu entendimento sobre o tema de acessibilidade web, no final do conteúdo estão disponíveis os links das referências.</p>
        </div>
        <StyleNav />
        <Image className="header__img" src={acessibilidade} alt="Grupo de pessoas com diferentes tipos de necessidades especiais acenando" fluid />
    </Fragment>
)

export default Header



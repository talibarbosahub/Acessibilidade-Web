import React, {Fragment} from 'react';
import StyleNav from './Nav/StyleNav'
import './Header.css'
import {Image, Container} from 'react-bootstrap'
import acessibilidade from '../../assets/acessibilidade.gif'

const Header =()=>(
<Fragment>
<h1 tabindex="0" className="title">O que você precisa saber sobre: Acessibilidade web</h1>
<StyleNav/>
<Image clasName="header__img" src={acessibilidade} alt="Grupo de pessoas com diferentes tipos de necessidades especiais acenando" fluid/>
</Fragment>
)

export default Header



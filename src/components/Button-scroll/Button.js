import React from 'react';
import BackToTop from 'react-back-to-top-button'
import './button.css'

const ButtonScroll =()=>(
    <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span className="btn__scroll">Voltar para o Topo</span>
      </BackToTop>
)

export default ButtonScroll
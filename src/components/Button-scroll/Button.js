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
        <span aria-label="voltar para o topo da página"className="btn__scroll"> <i class="fas fa-arrow-up"></i></span>
      </BackToTop>
)

export default ButtonScroll
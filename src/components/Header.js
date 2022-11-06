import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='hero'>
            <img className='hero-img' src="../../../img/bg_buttreasure-3.jpg" alt="top shot of ocean" />
            <div className="hero-box">
                <h1 className='hero-title'>But<br /> Treasure</h1>
                <p className='hero-text'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. </p>
            </div>
        </div>
    )
}

export default Header
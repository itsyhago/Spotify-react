import React from "react";
import '../vars.css'
import './sidebar.css'
import logo from '../assets/icons/logo-spotify.png'

const sidebar = () => {
    return(
    <div className="sidebar">
        <nav className="sidebar__navgation">
            <div className="logo">
                <a href=" "><img src={logo} alt="Logo do Spotify"></img></a>
            </div>
            <ul className="nav__links">
                <li>
                    <a href=" ">
                       <i className="fa fa-home"></i>
                       <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href=" ">
                        <i className="fa fa-search"></i>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="library">
            <div className="library__content">
                    <button className="library__button">
                        <i  className="fa fa-book"></i>
                        <span>Sua Biblioteca</span>
                    </button>
                <a href=" " className="plus">
                    <i className="fa fa-plus"></i>
                </a>
            </div>
            <section className="section__playlist">
                <div className="section__playlist__content">
                    <p className="text title">Crie sua primeira playlist</p>
                    <p className="text subtitle">É facil, vamos te ajudar</p>
                    <button className="section__playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>
            <div className="cookies"><a href=" ">Cookies</a></div>
            <div className="laguages">
                <button className="languages__button">
                    <span className="fa fa-globe"></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
        
    </div>
    )
}

export default sidebar
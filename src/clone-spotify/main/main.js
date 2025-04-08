import React from "react"
import '../vars.css'
import './main.css'
import smallRigth from '../assets/icons/small-right.png'
import smallLeft from '../assets/icons/small-left.png'
import search from '../assets/icons/search.png'
import card1Image from '../assets/playlist/1.jpeg'
import card2Image from '../assets/playlist/2.png'
import card3Image from '../assets/playlist/3.jpeg'
import card4Image from '../assets/playlist/4.jpeg'
import card5Image from '../assets/playlist/5.jpeg'
import card6Image from '../assets/playlist/6.jpeg'
import card7Image from '../assets/playlist/7.jpeg'
import card8Image from '../assets/playlist/8.jpeg'
import card9Image from '../assets/playlist/9.jpeg'
import card10Image from '../assets/playlist/10.jpeg'
import card11Image from '../assets/playlist/11.jpeg'
import card12Image from '../assets/playlist/12.jpeg'
import card13Image from '../assets/playlist/13.jpeg'
import card14Image from '../assets/playlist/14.jpeg'
import card15Image from '../assets/playlist/15.jpeg'
const main = () => {
    return(
        <main>
        <div className="main__container">
            <nav className="header__navgation">
                <div className="navgation">
                    <div className="navgation__button">
                        <button className="arrow-left"><img src={smallLeft} alt="Seta esquerda"/></button>
                        <button className="arrow-right"><img src= {smallRigth} alt="Seta direita"/></button>
                    </div>
                    <div className="header__search">
                        <img src={search} alt=""/>
                        <input id="search-input" type="text" maxLength="800" autoCorrect="false" autoCapitalize="off" spellCheck="false" placeholder="O que você quer ouvir?" defaultValue=""></input>
                    </div>
                    <div className="header__login">
                        <button className="subscribe">Inscreva-se</button>
                        <button className="login">Entrar</button>
                    </div>
                </div>
            </nav>

            <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>

                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">
                                {/* CARD 1 */}
                                <a href=" " className="cards">
                                    <div className="cards card1">
                                        <img src={card1Image} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>

                                {/*  CARD 2 */}
                                <a href=" " className="cards">
                                    <div className="cards card2">
                                        <img src={card2Image} alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>

                                {/* CARD 3  */}
                                <a href=" " className="cards">
                                    <div className="cards card3">
                                        <img src={card3Image} alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>

                                {/* CARD 4 */} 
                                <a href=" " className="cards">
                                    <div className="cards card4">
                                        <img src={card4Image} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>

                                {/* CARD 5 */}
                                <a href=" " className="cards">
                                    <div className="cards card5">
                                        <img src={card5Image} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>

                                {/* CARD 6 */}
                                <a href=" " className="cards">
                                    <div className="cards card6">
                                        <img src={card6Image} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>

                                {/* CARD 7 */}
                                <a href=" " className="cards">
                                    <div className="cards card7">
                                        <img src= {card7Image}alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>

                                {/* CARD 8 */}
                                <a href=" " className="cards">
                                    <div className="cards card8">
                                        <img src={card8Image} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>

                                {/* CARD 9 */}
                                <a href=" " className="cards">
                                    <div className="cards card9">
                                        <img src={card9Image} alt="" />
                                        <span>Funk</span>
                                    </div>
                                </a>

                                {/* CARD 10 */}
                                <a href=" " className="cards">
                                    <div className="cards card10">
                                        <img src={card10Image} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>

                                {/* CARD 11 */}
                                <a href=" " className="cards">
                                    <div className="cards card11">
                                        <img src={card11Image} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>

                                {/* CARD 12 */}
                                <a href=" " className="cards">
                                    <div className="cards card12">
                                        <img src={card12Image} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>

                                {/* CARD 13 */}
                                <a href=" " className="cards">
                                    <div className="cards card13">
                                        <img src={card13Image} alt="" />
                                        <span>Indie</span>
                                    </div>
                                </a>

                                {/* CARD 14 */}
                                <a href=" " className="cards">
                                    <div className="cards card14">
                                        <img src={card14Image} alt="" />
                                        <span>Relax</span>
                                    </div>
                                </a>

                                {/* CARD 15 */}
                                <a href=" " className="cards">
                                    <div className="cards card15">
                                        <img src={card15Image} alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                    
                </div>
                <div id="result-artist" className="hidden result-artist">
                    <div className="grid-container">
                        <div className="artist-card" id="">
                            <div className="card-img">
                                <img id="artist-img" className="artist-img"/>
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <a title="Foo Fighters" className="vst" href=" "></a>
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
    )
}

export default main
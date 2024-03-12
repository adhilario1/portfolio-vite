//React Libraries
//import React, { useState } from "react";
import { Link } from 'react-router-dom'
//Components
import Header from './Header';
import Modal from "./frag/Modal";

//style
import './css/Arcade.css';

//data
import games from './../assets/data/games.json';
//import GamePage from './GamePage';


interface Props {
    breakpoint?: number;
}

const Games = ({breakpoint}: Props) => {
    

    return (
        <>
        <Header breakpoint={breakpoint}/>
        <div className="content games">
            <div className="page-title">
                <h1 className="secondary-label">Games</h1>
                <p>A playable repository for some of the games I've made. It isn't all of them, just the ones that were light enough to play in a browser</p>
            </div>

            <div className="viewport-container">
                <ul>
                    {games.map((item) => (
                        <>
                        <li key={item.id}>
                            <Modal className="Modal" game={item} breakpoint={breakpoint} />
                            
                        </li>
                        <Link to={`/games/${item.id}`}>Go to {item.title} page</Link>
                        </>
                    ))}
                </ul>
            </div>
            <iframe frameBorder="0" src="https://itch.io/embed/2573424?bg_color=111&amp;fg_color=faebd7&amp;link_color=ff8b00&amp;border_color=bebebe" width="552" height="167"><a href="https://billyshouse.itch.io/tetris-clone">Tetris Clone by billyshouse</a></iframe>
            
        </div>
        </>
        
    )
};

export default Games;
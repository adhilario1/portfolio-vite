import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//data type
import { Game } from './../models/Game';
import games from './../assets/data/games.json'

interface Props {
    breakpoint?: number;
    game?: Game;
}

function GamePage({breakpoint, game }: Props ) {
  
 


  return (
    <div>
     {game?.title}
    </div>
  )
}

export default GamePage

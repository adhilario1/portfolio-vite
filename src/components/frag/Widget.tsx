//import React from 'react'

//import { Game } from '../../models/Game'

interface Props {
    className?: string;
    breakpoint?: number;
}

function Widget({className, breakpoint}: Props) {

  return (
    <div>
      {className}
      {breakpoint}
    </div>
  )
}

export default Widget

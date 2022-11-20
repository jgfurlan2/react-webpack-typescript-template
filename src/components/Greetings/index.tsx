import React from 'react'

import Logo from '~/assets/react.svg'

import { GreetingsContainer } from './styled'

export const Greetings: React.FC = () => {
  return (
    <GreetingsContainer>
      <div className="wrapper">
        <Logo />
        <div className="message">
          <h1>React + TypeScript + Custom webpack</h1>
        </div>
      </div>
    </GreetingsContainer>
  )
}

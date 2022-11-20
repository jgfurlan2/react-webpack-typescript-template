import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const GreetingsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  > div.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > svg {
      width: 100px;
      animation: ${rotate} 10s linear infinite;
    }

    > div.message {
      margin-top: var(--spacing-6);

      h1 {
        font-family: var(--font-semibold);
      }
    }
  }
`

import styled from 'styled-components'

export const ErrorBoundaryErrorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > .content-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;

    > .content-header {
      display: grid;
      grid-template-columns: 48px 1fr;
      grid-template-rows: 24px 24px;
      gap: 0 var(--spacing-2);
      grid-template-areas: 'I T' 'I M';
      margin-bottom: var(--spacing-2);

      > svg {
        grid-area: I;

        path {
          fill: var(--red-500);
        }
      }

      > h3 {
        grid-area: T;
        margin-bottom: 0;
        display: flex;
        align-items: center;
      }

      > p {
        grid-area: M;
        margin-bottom: 0;
        display: flex;
        align-items: center;
      }
    }

    > .content-body {
      max-height: 200px;
      max-width: 750px;
      background: var(--gray-400);
      padding: var(--spacing-2);
    }
  }
`

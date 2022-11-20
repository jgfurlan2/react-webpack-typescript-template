import React from 'react'

import { ErrorBoundaryErrorContainer } from './styled'

interface Props {
  children?: React.ReactNode
}

interface State {
  hasError: boolean
  error: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryErrorContainer>
          <div className="content-wrapper">
            <div className="content-header">
              <i className="fa-regular fa-circle-exclamation fa-4x" />
              <h3>Something went wrong.</h3>
              <p>
                {this.state.error.name}: {this.state.error.message}
              </p>
            </div>
            <pre className="content-body">{this.state.error.stack}</pre>
          </div>
        </ErrorBoundaryErrorContainer>
      )
    }

    return this.props.children
  }
}

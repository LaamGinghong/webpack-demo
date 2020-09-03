import React, { Component } from 'react'

interface ButtonProps {
  type: string
}

interface ButtonState {
  loading: boolean
}

class Button extends Component<ButtonProps, ButtonState> {
  readonly state: ButtonState = {
    loading: false,
  }

  private handleClick = () => {
    this.setState(
      ({ loading }) => ({ loading: !loading }),
      () => {
        setTimeout(() => {
          this.setState({ loading: !this.state.loading })
        }, 3000)
      },
    )
  }

  render() {
    const { loading } = this.state
    return (
      <button type='button' attr-loading={loading} onClick={this.handleClick}>
        按钮
      </button>
    )
  }
}

export default Button

import React, { Component } from 'react'
import Button from '../common/button'

interface HomeState {
  name: string
}

class Home extends Component<any, HomeState> {
  readonly state: HomeState = {
    name: 'White House',
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <p>This is my house. It called {name}</p>
        <Button type='123123' />
      </div>
    )
  }
}

export default Home

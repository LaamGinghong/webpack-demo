import React, { Component } from 'react'
import Button from '../common/button'

interface PersonState {
  name: string
}

class Person extends Component<any, PersonState> {
  readonly state: PersonState = {
    name: 'Tom',
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <p>{name}</p>
        <Button type='112233' />
      </div>
    )
  }
}

export default Person
